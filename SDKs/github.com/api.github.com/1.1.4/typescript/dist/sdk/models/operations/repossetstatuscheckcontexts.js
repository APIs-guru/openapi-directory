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
var ReposSetStatusCheckContextsPathParams = /** @class */ (function (_super) {
    __extends(ReposSetStatusCheckContextsPathParams, _super);
    function ReposSetStatusCheckContextsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" }),
        __metadata("design:type", String)
    ], ReposSetStatusCheckContextsPathParams.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposSetStatusCheckContextsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposSetStatusCheckContextsPathParams.prototype, "repo", void 0);
    return ReposSetStatusCheckContextsPathParams;
}(SpeakeasyBase));
export { ReposSetStatusCheckContextsPathParams };
var ReposSetStatusCheckContextsRequestBody = /** @class */ (function (_super) {
    __extends(ReposSetStatusCheckContextsRequestBody, _super);
    function ReposSetStatusCheckContextsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contexts" }),
        __metadata("design:type", Array)
    ], ReposSetStatusCheckContextsRequestBody.prototype, "contexts", void 0);
    return ReposSetStatusCheckContextsRequestBody;
}(SpeakeasyBase));
export { ReposSetStatusCheckContextsRequestBody };
var ReposSetStatusCheckContextsRequest = /** @class */ (function (_super) {
    __extends(ReposSetStatusCheckContextsRequest, _super);
    function ReposSetStatusCheckContextsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposSetStatusCheckContextsPathParams)
    ], ReposSetStatusCheckContextsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposSetStatusCheckContextsRequestBody)
    ], ReposSetStatusCheckContextsRequest.prototype, "request", void 0);
    return ReposSetStatusCheckContextsRequest;
}(SpeakeasyBase));
export { ReposSetStatusCheckContextsRequest };
var ReposSetStatusCheckContextsResponse = /** @class */ (function (_super) {
    __extends(ReposSetStatusCheckContextsResponse, _super);
    function ReposSetStatusCheckContextsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposSetStatusCheckContextsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposSetStatusCheckContextsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposSetStatusCheckContextsResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ReposSetStatusCheckContextsResponse.prototype, "reposSetStatusCheckContexts200ApplicationJsonStrings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposSetStatusCheckContextsResponse.prototype, "validationError", void 0);
    return ReposSetStatusCheckContextsResponse;
}(SpeakeasyBase));
export { ReposSetStatusCheckContextsResponse };
