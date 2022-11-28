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
export var StartDetailedSpaceSearchScopeEnum;
(function (StartDetailedSpaceSearchScopeEnum) {
    StartDetailedSpaceSearchScopeEnum["All"] = "ALL";
    StartDetailedSpaceSearchScopeEnum["Spaces"] = "SPACES";
    StartDetailedSpaceSearchScopeEnum["Topicby"] = "TOPICBY";
    StartDetailedSpaceSearchScopeEnum["Files"] = "FILES";
    StartDetailedSpaceSearchScopeEnum["Tags"] = "TAGS";
    StartDetailedSpaceSearchScopeEnum["Labels"] = "LABELS";
    StartDetailedSpaceSearchScopeEnum["Date"] = "DATE";
})(StartDetailedSpaceSearchScopeEnum || (StartDetailedSpaceSearchScopeEnum = {}));
var StartDetailedSpaceSearchQueryParams = /** @class */ (function (_super) {
    __extends(StartDetailedSpaceSearchQueryParams, _super);
    function StartDetailedSpaceSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", Date)
    ], StartDetailedSpaceSearchQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" }),
        __metadata("design:type", String)
    ], StartDetailedSpaceSearchQueryParams.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchId" }),
        __metadata("design:type", String)
    ], StartDetailedSpaceSearchQueryParams.prototype, "searchId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" }),
        __metadata("design:type", String)
    ], StartDetailedSpaceSearchQueryParams.prototype, "searchTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spaceId" }),
        __metadata("design:type", String)
    ], StartDetailedSpaceSearchQueryParams.prototype, "spaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", Date)
    ], StartDetailedSpaceSearchQueryParams.prototype, "startTime", void 0);
    return StartDetailedSpaceSearchQueryParams;
}(SpeakeasyBase));
export { StartDetailedSpaceSearchQueryParams };
var StartDetailedSpaceSearchSecurity = /** @class */ (function (_super) {
    __extends(StartDetailedSpaceSearchSecurity, _super);
    function StartDetailedSpaceSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], StartDetailedSpaceSearchSecurity.prototype, "oauth", void 0);
    return StartDetailedSpaceSearchSecurity;
}(SpeakeasyBase));
export { StartDetailedSpaceSearchSecurity };
var StartDetailedSpaceSearchRequest = /** @class */ (function (_super) {
    __extends(StartDetailedSpaceSearchRequest, _super);
    function StartDetailedSpaceSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartDetailedSpaceSearchQueryParams)
    ], StartDetailedSpaceSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartDetailedSpaceSearchSecurity)
    ], StartDetailedSpaceSearchRequest.prototype, "security", void 0);
    return StartDetailedSpaceSearchRequest;
}(SpeakeasyBase));
export { StartDetailedSpaceSearchRequest };
var StartDetailedSpaceSearchResponse = /** @class */ (function (_super) {
    __extends(StartDetailedSpaceSearchResponse, _super);
    function StartDetailedSpaceSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], StartDetailedSpaceSearchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartDetailedSpaceSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], StartDetailedSpaceSearchResponse.prototype, "spaceSearchResultDetailedBacks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartDetailedSpaceSearchResponse.prototype, "statusCode", void 0);
    return StartDetailedSpaceSearchResponse;
}(SpeakeasyBase));
export { StartDetailedSpaceSearchResponse };
