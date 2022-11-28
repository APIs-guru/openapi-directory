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
var GetSpaceParticipantsPathParams = /** @class */ (function (_super) {
    __extends(GetSpaceParticipantsPathParams, _super);
    function GetSpaceParticipantsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSpaceParticipantsPathParams.prototype, "id", void 0);
    return GetSpaceParticipantsPathParams;
}(SpeakeasyBase));
export { GetSpaceParticipantsPathParams };
export var GetSpaceParticipantsFilterTypeEnum;
(function (GetSpaceParticipantsFilterTypeEnum) {
    GetSpaceParticipantsFilterTypeEnum["None"] = "NONE";
    GetSpaceParticipantsFilterTypeEnum["AccessType"] = "ACCESS_TYPE";
    GetSpaceParticipantsFilterTypeEnum["Role"] = "ROLE";
    GetSpaceParticipantsFilterTypeEnum["State"] = "STATE";
})(GetSpaceParticipantsFilterTypeEnum || (GetSpaceParticipantsFilterTypeEnum = {}));
export var GetSpaceParticipantsSortByEnum;
(function (GetSpaceParticipantsSortByEnum) {
    GetSpaceParticipantsSortByEnum["DisplayName"] = "DISPLAY_NAME";
    GetSpaceParticipantsSortByEnum["Name"] = "NAME";
    GetSpaceParticipantsSortByEnum["FirstName"] = "FIRST_NAME";
})(GetSpaceParticipantsSortByEnum || (GetSpaceParticipantsSortByEnum = {}));
export var GetSpaceParticipantsSortOrderEnum;
(function (GetSpaceParticipantsSortOrderEnum) {
    GetSpaceParticipantsSortOrderEnum["Ascending"] = "ASCENDING";
    GetSpaceParticipantsSortOrderEnum["Descending"] = "DESCENDING";
})(GetSpaceParticipantsSortOrderEnum || (GetSpaceParticipantsSortOrderEnum = {}));
var GetSpaceParticipantsQueryParams = /** @class */ (function (_super) {
    __extends(GetSpaceParticipantsQueryParams, _super);
    function GetSpaceParticipantsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterType" }),
        __metadata("design:type", String)
    ], GetSpaceParticipantsQueryParams.prototype, "filterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterValue" }),
        __metadata("design:type", String)
    ], GetSpaceParticipantsQueryParams.prototype, "filterValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" }),
        __metadata("design:type", Number)
    ], GetSpaceParticipantsQueryParams.prototype, "numberOfResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetSpaceParticipantsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchPointer" }),
        __metadata("design:type", String)
    ], GetSpaceParticipantsQueryParams.prototype, "searchPointer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetSpaceParticipantsQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetSpaceParticipantsQueryParams.prototype, "sortOrder", void 0);
    return GetSpaceParticipantsQueryParams;
}(SpeakeasyBase));
export { GetSpaceParticipantsQueryParams };
var GetSpaceParticipantsSecurity = /** @class */ (function (_super) {
    __extends(GetSpaceParticipantsSecurity, _super);
    function GetSpaceParticipantsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetSpaceParticipantsSecurity.prototype, "oauth", void 0);
    return GetSpaceParticipantsSecurity;
}(SpeakeasyBase));
export { GetSpaceParticipantsSecurity };
var GetSpaceParticipantsRequest = /** @class */ (function (_super) {
    __extends(GetSpaceParticipantsRequest, _super);
    function GetSpaceParticipantsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSpaceParticipantsPathParams)
    ], GetSpaceParticipantsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSpaceParticipantsQueryParams)
    ], GetSpaceParticipantsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSpaceParticipantsSecurity)
    ], GetSpaceParticipantsRequest.prototype, "security", void 0);
    return GetSpaceParticipantsRequest;
}(SpeakeasyBase));
export { GetSpaceParticipantsRequest };
var GetSpaceParticipantsResponse = /** @class */ (function (_super) {
    __extends(GetSpaceParticipantsResponse, _super);
    function GetSpaceParticipantsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetSpaceParticipantsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSpaceParticipantsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetSpaceParticipantsResponse.prototype, "participantsSearchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSpaceParticipantsResponse.prototype, "statusCode", void 0);
    return GetSpaceParticipantsResponse;
}(SpeakeasyBase));
export { GetSpaceParticipantsResponse };
