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
export var GetFlaggedItemsSearchDirectionEnum;
(function (GetFlaggedItemsSearchDirectionEnum) {
    GetFlaggedItemsSearchDirectionEnum["Before"] = "BEFORE";
    GetFlaggedItemsSearchDirectionEnum["After"] = "AFTER";
})(GetFlaggedItemsSearchDirectionEnum || (GetFlaggedItemsSearchDirectionEnum = {}));
var GetFlaggedItemsQueryParams = /** @class */ (function (_super) {
    __extends(GetFlaggedItemsQueryParams, _super);
    function GetFlaggedItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" }),
        __metadata("design:type", Number)
    ], GetFlaggedItemsQueryParams.prototype, "numberOfResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchDirection" }),
        __metadata("design:type", String)
    ], GetFlaggedItemsQueryParams.prototype, "searchDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchPointer" }),
        __metadata("design:type", String)
    ], GetFlaggedItemsQueryParams.prototype, "searchPointer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" }),
        __metadata("design:type", Date)
    ], GetFlaggedItemsQueryParams.prototype, "timestamp", void 0);
    return GetFlaggedItemsQueryParams;
}(SpeakeasyBase));
export { GetFlaggedItemsQueryParams };
var GetFlaggedItemsSecurity = /** @class */ (function (_super) {
    __extends(GetFlaggedItemsSecurity, _super);
    function GetFlaggedItemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetFlaggedItemsSecurity.prototype, "oauth", void 0);
    return GetFlaggedItemsSecurity;
}(SpeakeasyBase));
export { GetFlaggedItemsSecurity };
var GetFlaggedItemsRequest = /** @class */ (function (_super) {
    __extends(GetFlaggedItemsRequest, _super);
    function GetFlaggedItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFlaggedItemsQueryParams)
    ], GetFlaggedItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFlaggedItemsSecurity)
    ], GetFlaggedItemsRequest.prototype, "security", void 0);
    return GetFlaggedItemsRequest;
}(SpeakeasyBase));
export { GetFlaggedItemsRequest };
var GetFlaggedItemsResponse = /** @class */ (function (_super) {
    __extends(GetFlaggedItemsResponse, _super);
    function GetFlaggedItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetFlaggedItemsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFlaggedItemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFlaggedItemsResponse.prototype, "flaggedItemsResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFlaggedItemsResponse.prototype, "statusCode", void 0);
    return GetFlaggedItemsResponse;
}(SpeakeasyBase));
export { GetFlaggedItemsResponse };
