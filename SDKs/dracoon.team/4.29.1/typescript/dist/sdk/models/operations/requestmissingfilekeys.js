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
var RequestMissingFileKeysQueryParams = /** @class */ (function (_super) {
    __extends(RequestMissingFileKeysQueryParams, _super);
    function RequestMissingFileKeysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_id" }),
        __metadata("design:type", Number)
    ], RequestMissingFileKeysQueryParams.prototype, "fileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RequestMissingFileKeysQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], RequestMissingFileKeysQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=room_id" }),
        __metadata("design:type", Number)
    ], RequestMissingFileKeysQueryParams.prototype, "roomId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=use_key" }),
        __metadata("design:type", Object)
    ], RequestMissingFileKeysQueryParams.prototype, "useKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" }),
        __metadata("design:type", Number)
    ], RequestMissingFileKeysQueryParams.prototype, "userId", void 0);
    return RequestMissingFileKeysQueryParams;
}(SpeakeasyBase));
export { RequestMissingFileKeysQueryParams };
var RequestMissingFileKeysHeaders = /** @class */ (function (_super) {
    __extends(RequestMissingFileKeysHeaders, _super);
    function RequestMissingFileKeysHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestMissingFileKeysHeaders.prototype, "xSdsAuthToken", void 0);
    return RequestMissingFileKeysHeaders;
}(SpeakeasyBase));
export { RequestMissingFileKeysHeaders };
var RequestMissingFileKeysRequest = /** @class */ (function (_super) {
    __extends(RequestMissingFileKeysRequest, _super);
    function RequestMissingFileKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestMissingFileKeysQueryParams)
    ], RequestMissingFileKeysRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestMissingFileKeysHeaders)
    ], RequestMissingFileKeysRequest.prototype, "headers", void 0);
    return RequestMissingFileKeysRequest;
}(SpeakeasyBase));
export { RequestMissingFileKeysRequest };
var RequestMissingFileKeysResponseOutput = /** @class */ (function (_super) {
    __extends(RequestMissingFileKeysResponseOutput, _super);
    function RequestMissingFileKeysResponseOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestMissingFileKeysResponseOutput.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestMissingFileKeysResponseOutput.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MissingKeysResponseOutput)
    ], RequestMissingFileKeysResponseOutput.prototype, "missingKeysResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestMissingFileKeysResponseOutput.prototype, "statusCode", void 0);
    return RequestMissingFileKeysResponseOutput;
}(SpeakeasyBase));
export { RequestMissingFileKeysResponseOutput };
