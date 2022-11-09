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
var PostContainersGroupsNameOrIdMaproutePathParams = /** @class */ (function (_super) {
    __extends(PostContainersGroupsNameOrIdMaproutePathParams, _super);
    function PostContainersGroupsNameOrIdMaproutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" }),
        __metadata("design:type", String)
    ], PostContainersGroupsNameOrIdMaproutePathParams.prototype, "nameOrId", void 0);
    return PostContainersGroupsNameOrIdMaproutePathParams;
}(SpeakeasyBase));
export { PostContainersGroupsNameOrIdMaproutePathParams };
var PostContainersGroupsNameOrIdMaprouteHeaders = /** @class */ (function (_super) {
    __extends(PostContainersGroupsNameOrIdMaprouteHeaders, _super);
    function PostContainersGroupsNameOrIdMaprouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], PostContainersGroupsNameOrIdMaprouteHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], PostContainersGroupsNameOrIdMaprouteHeaders.prototype, "xAuthToken", void 0);
    return PostContainersGroupsNameOrIdMaprouteHeaders;
}(SpeakeasyBase));
export { PostContainersGroupsNameOrIdMaprouteHeaders };
var PostContainersGroupsNameOrIdMaprouteRequest = /** @class */ (function (_super) {
    __extends(PostContainersGroupsNameOrIdMaprouteRequest, _super);
    function PostContainersGroupsNameOrIdMaprouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostContainersGroupsNameOrIdMaproutePathParams)
    ], PostContainersGroupsNameOrIdMaprouteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostContainersGroupsNameOrIdMaprouteHeaders)
    ], PostContainersGroupsNameOrIdMaprouteRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Route)
    ], PostContainersGroupsNameOrIdMaprouteRequest.prototype, "request", void 0);
    return PostContainersGroupsNameOrIdMaprouteRequest;
}(SpeakeasyBase));
export { PostContainersGroupsNameOrIdMaprouteRequest };
var PostContainersGroupsNameOrIdMaprouteResponse = /** @class */ (function (_super) {
    __extends(PostContainersGroupsNameOrIdMaprouteResponse, _super);
    function PostContainersGroupsNameOrIdMaprouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ContainersGroupsNameOrIdMaproutePostInfo)
    ], PostContainersGroupsNameOrIdMaprouteResponse.prototype, "containersGroupsNameOrIdMaproutePostInfo", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostContainersGroupsNameOrIdMaprouteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostContainersGroupsNameOrIdMaprouteResponse.prototype, "statusCode", void 0);
    return PostContainersGroupsNameOrIdMaprouteResponse;
}(SpeakeasyBase));
export { PostContainersGroupsNameOrIdMaprouteResponse };
