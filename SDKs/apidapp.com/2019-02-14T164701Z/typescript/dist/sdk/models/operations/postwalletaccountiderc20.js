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
var PostWalletAccountIdErc20PathParams = /** @class */ (function (_super) {
    __extends(PostWalletAccountIdErc20PathParams, _super);
    function PostWalletAccountIdErc20PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostWalletAccountIdErc20PathParams.prototype, "id", void 0);
    return PostWalletAccountIdErc20PathParams;
}(SpeakeasyBase));
export { PostWalletAccountIdErc20PathParams };
var PostWalletAccountIdErc20Request = /** @class */ (function (_super) {
    __extends(PostWalletAccountIdErc20Request, _super);
    function PostWalletAccountIdErc20Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostWalletAccountIdErc20PathParams)
    ], PostWalletAccountIdErc20Request.prototype, "pathParams", void 0);
    return PostWalletAccountIdErc20Request;
}(SpeakeasyBase));
export { PostWalletAccountIdErc20Request };
var PostWalletAccountIdErc20Response = /** @class */ (function (_super) {
    __extends(PostWalletAccountIdErc20Response, _super);
    function PostWalletAccountIdErc20Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostWalletAccountIdErc20Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], PostWalletAccountIdErc20Response.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostWalletAccountIdErc20Response.prototype, "statusCode", void 0);
    return PostWalletAccountIdErc20Response;
}(SpeakeasyBase));
export { PostWalletAccountIdErc20Response };
