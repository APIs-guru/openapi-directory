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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var DeleteVolumesFsNamePathParams = /** @class */ (function (_super) {
    __extends(DeleteVolumesFsNamePathParams, _super);
    function DeleteVolumesFsNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DeleteVolumesFsNamePathParams.prototype, "name", void 0);
    return DeleteVolumesFsNamePathParams;
}(SpeakeasyBase));
export { DeleteVolumesFsNamePathParams };
var DeleteVolumesFsNameHeaders = /** @class */ (function (_super) {
    __extends(DeleteVolumesFsNameHeaders, _super);
    function DeleteVolumesFsNameHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], DeleteVolumesFsNameHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], DeleteVolumesFsNameHeaders.prototype, "xAuthToken", void 0);
    return DeleteVolumesFsNameHeaders;
}(SpeakeasyBase));
export { DeleteVolumesFsNameHeaders };
var DeleteVolumesFsNameRequest = /** @class */ (function (_super) {
    __extends(DeleteVolumesFsNameRequest, _super);
    function DeleteVolumesFsNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteVolumesFsNamePathParams)
    ], DeleteVolumesFsNameRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteVolumesFsNameHeaders)
    ], DeleteVolumesFsNameRequest.prototype, "headers", void 0);
    return DeleteVolumesFsNameRequest;
}(SpeakeasyBase));
export { DeleteVolumesFsNameRequest };
var DeleteVolumesFsNameResponse = /** @class */ (function (_super) {
    __extends(DeleteVolumesFsNameResponse, _super);
    function DeleteVolumesFsNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteVolumesFsNameResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteVolumesFsNameResponse.prototype, "statusCode", void 0);
    return DeleteVolumesFsNameResponse;
}(SpeakeasyBase));
export { DeleteVolumesFsNameResponse };
