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
var PostContainersNameOrIdRenamePathParams = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdRenamePathParams, _super);
    function PostContainersNameOrIdRenamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" }),
        __metadata("design:type", String)
    ], PostContainersNameOrIdRenamePathParams.prototype, "nameOrId", void 0);
    return PostContainersNameOrIdRenamePathParams;
}(SpeakeasyBase));
export { PostContainersNameOrIdRenamePathParams };
var PostContainersNameOrIdRenameQueryParams = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdRenameQueryParams, _super);
    function PostContainersNameOrIdRenameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], PostContainersNameOrIdRenameQueryParams.prototype, "name", void 0);
    return PostContainersNameOrIdRenameQueryParams;
}(SpeakeasyBase));
export { PostContainersNameOrIdRenameQueryParams };
var PostContainersNameOrIdRenameHeaders = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdRenameHeaders, _super);
    function PostContainersNameOrIdRenameHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], PostContainersNameOrIdRenameHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], PostContainersNameOrIdRenameHeaders.prototype, "xAuthToken", void 0);
    return PostContainersNameOrIdRenameHeaders;
}(SpeakeasyBase));
export { PostContainersNameOrIdRenameHeaders };
var PostContainersNameOrIdRenameRequest = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdRenameRequest, _super);
    function PostContainersNameOrIdRenameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostContainersNameOrIdRenamePathParams)
    ], PostContainersNameOrIdRenameRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostContainersNameOrIdRenameQueryParams)
    ], PostContainersNameOrIdRenameRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostContainersNameOrIdRenameHeaders)
    ], PostContainersNameOrIdRenameRequest.prototype, "headers", void 0);
    return PostContainersNameOrIdRenameRequest;
}(SpeakeasyBase));
export { PostContainersNameOrIdRenameRequest };
var PostContainersNameOrIdRenameResponse = /** @class */ (function (_super) {
    __extends(PostContainersNameOrIdRenameResponse, _super);
    function PostContainersNameOrIdRenameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostContainersNameOrIdRenameResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostContainersNameOrIdRenameResponse.prototype, "statusCode", void 0);
    return PostContainersNameOrIdRenameResponse;
}(SpeakeasyBase));
export { PostContainersNameOrIdRenameResponse };
