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
export var AddRecentSpaceSearchRequestBodyScopeEnum;
(function (AddRecentSpaceSearchRequestBodyScopeEnum) {
    AddRecentSpaceSearchRequestBodyScopeEnum["All"] = "ALL";
    AddRecentSpaceSearchRequestBodyScopeEnum["Spaces"] = "SPACES";
    AddRecentSpaceSearchRequestBodyScopeEnum["Topicby"] = "TOPICBY";
    AddRecentSpaceSearchRequestBodyScopeEnum["Files"] = "FILES";
    AddRecentSpaceSearchRequestBodyScopeEnum["Tags"] = "TAGS";
    AddRecentSpaceSearchRequestBodyScopeEnum["Labels"] = "LABELS";
    AddRecentSpaceSearchRequestBodyScopeEnum["Date"] = "DATE";
})(AddRecentSpaceSearchRequestBodyScopeEnum || (AddRecentSpaceSearchRequestBodyScopeEnum = {}));
var AddRecentSpaceSearchRequestBody = /** @class */ (function (_super) {
    __extends(AddRecentSpaceSearchRequestBody, _super);
    function AddRecentSpaceSearchRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=endTime;" }),
        __metadata("design:type", Date)
    ], AddRecentSpaceSearchRequestBody.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=scope;" }),
        __metadata("design:type", String)
    ], AddRecentSpaceSearchRequestBody.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=searchTerm;" }),
        __metadata("design:type", String)
    ], AddRecentSpaceSearchRequestBody.prototype, "searchTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=startTime;" }),
        __metadata("design:type", Date)
    ], AddRecentSpaceSearchRequestBody.prototype, "startTime", void 0);
    return AddRecentSpaceSearchRequestBody;
}(SpeakeasyBase));
export { AddRecentSpaceSearchRequestBody };
var AddRecentSpaceSearchSecurity = /** @class */ (function (_super) {
    __extends(AddRecentSpaceSearchSecurity, _super);
    function AddRecentSpaceSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], AddRecentSpaceSearchSecurity.prototype, "oauth", void 0);
    return AddRecentSpaceSearchSecurity;
}(SpeakeasyBase));
export { AddRecentSpaceSearchSecurity };
var AddRecentSpaceSearchRequest = /** @class */ (function (_super) {
    __extends(AddRecentSpaceSearchRequest, _super);
    function AddRecentSpaceSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", AddRecentSpaceSearchRequestBody)
    ], AddRecentSpaceSearchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddRecentSpaceSearchSecurity)
    ], AddRecentSpaceSearchRequest.prototype, "security", void 0);
    return AddRecentSpaceSearchRequest;
}(SpeakeasyBase));
export { AddRecentSpaceSearchRequest };
var AddRecentSpaceSearchResponse = /** @class */ (function (_super) {
    __extends(AddRecentSpaceSearchResponse, _super);
    function AddRecentSpaceSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddRecentSpaceSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddRecentSpaceSearchResponse.prototype, "statusCode", void 0);
    return AddRecentSpaceSearchResponse;
}(SpeakeasyBase));
export { AddRecentSpaceSearchResponse };
