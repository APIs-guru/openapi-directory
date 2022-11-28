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
var GetLikesPathParams = /** @class */ (function (_super) {
    __extends(GetLikesPathParams, _super);
    function GetLikesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetLikesPathParams.prototype, "itemId", void 0);
    return GetLikesPathParams;
}(SpeakeasyBase));
export { GetLikesPathParams };
var GetLikesQueryParams = /** @class */ (function (_super) {
    __extends(GetLikesQueryParams, _super);
    function GetLikesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" }),
        __metadata("design:type", Number)
    ], GetLikesQueryParams.prototype, "numberOfResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchPointer" }),
        __metadata("design:type", String)
    ], GetLikesQueryParams.prototype, "searchPointer", void 0);
    return GetLikesQueryParams;
}(SpeakeasyBase));
export { GetLikesQueryParams };
var GetLikesSecurity = /** @class */ (function (_super) {
    __extends(GetLikesSecurity, _super);
    function GetLikesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLikesSecurity.prototype, "oauth", void 0);
    return GetLikesSecurity;
}(SpeakeasyBase));
export { GetLikesSecurity };
var GetLikesRequest = /** @class */ (function (_super) {
    __extends(GetLikesRequest, _super);
    function GetLikesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLikesPathParams)
    ], GetLikesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLikesQueryParams)
    ], GetLikesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLikesSecurity)
    ], GetLikesRequest.prototype, "security", void 0);
    return GetLikesRequest;
}(SpeakeasyBase));
export { GetLikesRequest };
var GetLikesResponse = /** @class */ (function (_super) {
    __extends(GetLikesResponse, _super);
    function GetLikesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetLikesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLikesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetLikesResponse.prototype, "participantsLikeResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLikesResponse.prototype, "statusCode", void 0);
    return GetLikesResponse;
}(SpeakeasyBase));
export { GetLikesResponse };
