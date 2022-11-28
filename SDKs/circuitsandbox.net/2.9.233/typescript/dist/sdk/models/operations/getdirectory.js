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
export var GetDirectoryFilterEnum;
(function (GetDirectoryFilterEnum) {
    GetDirectoryFilterEnum["None"] = "NONE";
    GetDirectoryFilterEnum["Joined"] = "JOINED";
    GetDirectoryFilterEnum["Requested"] = "REQUESTED";
    GetDirectoryFilterEnum["Open"] = "OPEN";
    GetDirectoryFilterEnum["Closed"] = "CLOSED";
    GetDirectoryFilterEnum["NotJoinedRequested"] = "NOT_JOINED_REQUESTED";
})(GetDirectoryFilterEnum || (GetDirectoryFilterEnum = {}));
export var GetDirectorySortByEnum;
(function (GetDirectorySortByEnum) {
    GetDirectorySortByEnum["LastContent"] = "LAST_CONTENT";
    GetDirectorySortByEnum["Name"] = "NAME";
    GetDirectorySortByEnum["NumberOfUsers"] = "NUMBER_OF_USERS";
    GetDirectorySortByEnum["CreationDate"] = "CREATION_DATE";
})(GetDirectorySortByEnum || (GetDirectorySortByEnum = {}));
export var GetDirectorySortOrderEnum;
(function (GetDirectorySortOrderEnum) {
    GetDirectorySortOrderEnum["Ascending"] = "ASCENDING";
    GetDirectorySortOrderEnum["Descending"] = "DESCENDING";
})(GetDirectorySortOrderEnum || (GetDirectorySortOrderEnum = {}));
var GetDirectoryQueryParams = /** @class */ (function (_super) {
    __extends(GetDirectoryQueryParams, _super);
    function GetDirectoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetDirectoryQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" }),
        __metadata("design:type", Number)
    ], GetDirectoryQueryParams.prototype, "numberOfResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagePointer" }),
        __metadata("design:type", String)
    ], GetDirectoryQueryParams.prototype, "pagePointer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetDirectoryQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetDirectoryQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetDirectoryQueryParams.prototype, "sortOrder", void 0);
    return GetDirectoryQueryParams;
}(SpeakeasyBase));
export { GetDirectoryQueryParams };
var GetDirectorySecurity = /** @class */ (function (_super) {
    __extends(GetDirectorySecurity, _super);
    function GetDirectorySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetDirectorySecurity.prototype, "oauth", void 0);
    return GetDirectorySecurity;
}(SpeakeasyBase));
export { GetDirectorySecurity };
var GetDirectoryRequest = /** @class */ (function (_super) {
    __extends(GetDirectoryRequest, _super);
    function GetDirectoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDirectoryQueryParams)
    ], GetDirectoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDirectorySecurity)
    ], GetDirectoryRequest.prototype, "security", void 0);
    return GetDirectoryRequest;
}(SpeakeasyBase));
export { GetDirectoryRequest };
var GetDirectoryResponse = /** @class */ (function (_super) {
    __extends(GetDirectoryResponse, _super);
    function GetDirectoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDirectoryResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDirectoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDirectoryResponse.prototype, "directoryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDirectoryResponse.prototype, "statusCode", void 0);
    return GetDirectoryResponse;
}(SpeakeasyBase));
export { GetDirectoryResponse };
