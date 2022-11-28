var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var StartBasicSpacesSearchScopeEnum;
(function (StartBasicSpacesSearchScopeEnum) {
    StartBasicSpacesSearchScopeEnum["All"] = "ALL";
    StartBasicSpacesSearchScopeEnum["Spaces"] = "SPACES";
    StartBasicSpacesSearchScopeEnum["Topicby"] = "TOPICBY";
    StartBasicSpacesSearchScopeEnum["Files"] = "FILES";
    StartBasicSpacesSearchScopeEnum["Tags"] = "TAGS";
    StartBasicSpacesSearchScopeEnum["Labels"] = "LABELS";
    StartBasicSpacesSearchScopeEnum["Date"] = "DATE";
})(StartBasicSpacesSearchScopeEnum || (StartBasicSpacesSearchScopeEnum = {}));
var StartBasicSpacesSearchQueryParams = /** @class */ (function (_super) {
    __extends(StartBasicSpacesSearchQueryParams, _super);
    function StartBasicSpacesSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", Date)
    ], StartBasicSpacesSearchQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prioritySpaces" }),
        __metadata("design:type", Array)
    ], StartBasicSpacesSearchQueryParams.prototype, "prioritySpaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" }),
        __metadata("design:type", String)
    ], StartBasicSpacesSearchQueryParams.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" }),
        __metadata("design:type", String)
    ], StartBasicSpacesSearchQueryParams.prototype, "searchTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", Date)
    ], StartBasicSpacesSearchQueryParams.prototype, "startTime", void 0);
    return StartBasicSpacesSearchQueryParams;
}(SpeakeasyBase));
export { StartBasicSpacesSearchQueryParams };
var StartBasicSpacesSearchSecurity = /** @class */ (function (_super) {
    __extends(StartBasicSpacesSearchSecurity, _super);
    function StartBasicSpacesSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], StartBasicSpacesSearchSecurity.prototype, "oauth", void 0);
    return StartBasicSpacesSearchSecurity;
}(SpeakeasyBase));
export { StartBasicSpacesSearchSecurity };
var StartBasicSpacesSearchRequest = /** @class */ (function (_super) {
    __extends(StartBasicSpacesSearchRequest, _super);
    function StartBasicSpacesSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartBasicSpacesSearchQueryParams)
    ], StartBasicSpacesSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartBasicSpacesSearchSecurity)
    ], StartBasicSpacesSearchRequest.prototype, "security", void 0);
    return StartBasicSpacesSearchRequest;
}(SpeakeasyBase));
export { StartBasicSpacesSearchRequest };
var StartBasicSpacesSearchResponse = /** @class */ (function (_super) {
    __extends(StartBasicSpacesSearchResponse, _super);
    function StartBasicSpacesSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartBasicSpacesSearchResponse.prototype, "basicSearchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], StartBasicSpacesSearchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartBasicSpacesSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartBasicSpacesSearchResponse.prototype, "statusCode", void 0);
    return StartBasicSpacesSearchResponse;
}(SpeakeasyBase));
export { StartBasicSpacesSearchResponse };
