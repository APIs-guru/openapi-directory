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
var PostContainersFloatingIpsIpReleasePathParams = /** @class */ (function (_super) {
    __extends(PostContainersFloatingIpsIpReleasePathParams, _super);
    function PostContainersFloatingIpsIpReleasePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ip" }),
        __metadata("design:type", String)
    ], PostContainersFloatingIpsIpReleasePathParams.prototype, "ip", void 0);
    return PostContainersFloatingIpsIpReleasePathParams;
}(SpeakeasyBase));
export { PostContainersFloatingIpsIpReleasePathParams };
var PostContainersFloatingIpsIpReleaseHeaders = /** @class */ (function (_super) {
    __extends(PostContainersFloatingIpsIpReleaseHeaders, _super);
    function PostContainersFloatingIpsIpReleaseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], PostContainersFloatingIpsIpReleaseHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], PostContainersFloatingIpsIpReleaseHeaders.prototype, "xAuthToken", void 0);
    return PostContainersFloatingIpsIpReleaseHeaders;
}(SpeakeasyBase));
export { PostContainersFloatingIpsIpReleaseHeaders };
var PostContainersFloatingIpsIpReleaseRequest = /** @class */ (function (_super) {
    __extends(PostContainersFloatingIpsIpReleaseRequest, _super);
    function PostContainersFloatingIpsIpReleaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostContainersFloatingIpsIpReleasePathParams)
    ], PostContainersFloatingIpsIpReleaseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostContainersFloatingIpsIpReleaseHeaders)
    ], PostContainersFloatingIpsIpReleaseRequest.prototype, "headers", void 0);
    return PostContainersFloatingIpsIpReleaseRequest;
}(SpeakeasyBase));
export { PostContainersFloatingIpsIpReleaseRequest };
var PostContainersFloatingIpsIpReleaseResponse = /** @class */ (function (_super) {
    __extends(PostContainersFloatingIpsIpReleaseResponse, _super);
    function PostContainersFloatingIpsIpReleaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostContainersFloatingIpsIpReleaseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostContainersFloatingIpsIpReleaseResponse.prototype, "statusCode", void 0);
    return PostContainersFloatingIpsIpReleaseResponse;
}(SpeakeasyBase));
export { PostContainersFloatingIpsIpReleaseResponse };
