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
import * as shared from "../shared";
var PostUuidQueryParams = /** @class */ (function (_super) {
    __extends(PostUuidQueryParams, _super);
    function PostUuidQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uuidstr" }),
        __metadata("design:type", String)
    ], PostUuidQueryParams.prototype, "uuidstr", void 0);
    return PostUuidQueryParams;
}(SpeakeasyBase));
export { PostUuidQueryParams };
var PostUuidSecurity = /** @class */ (function (_super) {
    __extends(PostUuidSecurity, _super);
    function PostUuidSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXFungeneratorsApiSecret)
    ], PostUuidSecurity.prototype, "xFungeneratorsApiSecret", void 0);
    return PostUuidSecurity;
}(SpeakeasyBase));
export { PostUuidSecurity };
var PostUuidRequest = /** @class */ (function (_super) {
    __extends(PostUuidRequest, _super);
    function PostUuidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostUuidQueryParams)
    ], PostUuidRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostUuidSecurity)
    ], PostUuidRequest.prototype, "security", void 0);
    return PostUuidRequest;
}(SpeakeasyBase));
export { PostUuidRequest };
var PostUuidResponse = /** @class */ (function (_super) {
    __extends(PostUuidResponse, _super);
    function PostUuidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUuidResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUuidResponse.prototype, "statusCode", void 0);
    return PostUuidResponse;
}(SpeakeasyBase));
export { PostUuidResponse };
