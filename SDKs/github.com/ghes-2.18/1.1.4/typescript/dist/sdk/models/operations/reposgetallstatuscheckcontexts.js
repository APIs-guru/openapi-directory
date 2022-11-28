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
var ReposGetAllStatusCheckContextsPathParams = /** @class */ (function (_super) {
    __extends(ReposGetAllStatusCheckContextsPathParams, _super);
    function ReposGetAllStatusCheckContextsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" }),
        __metadata("design:type", String)
    ], ReposGetAllStatusCheckContextsPathParams.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposGetAllStatusCheckContextsPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposGetAllStatusCheckContextsPathParams.prototype, "repo", void 0);
    return ReposGetAllStatusCheckContextsPathParams;
}(SpeakeasyBase));
export { ReposGetAllStatusCheckContextsPathParams };
var ReposGetAllStatusCheckContextsRequest = /** @class */ (function (_super) {
    __extends(ReposGetAllStatusCheckContextsRequest, _super);
    function ReposGetAllStatusCheckContextsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposGetAllStatusCheckContextsPathParams)
    ], ReposGetAllStatusCheckContextsRequest.prototype, "pathParams", void 0);
    return ReposGetAllStatusCheckContextsRequest;
}(SpeakeasyBase));
export { ReposGetAllStatusCheckContextsRequest };
var ReposGetAllStatusCheckContextsResponse = /** @class */ (function (_super) {
    __extends(ReposGetAllStatusCheckContextsResponse, _super);
    function ReposGetAllStatusCheckContextsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposGetAllStatusCheckContextsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposGetAllStatusCheckContextsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposGetAllStatusCheckContextsResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ReposGetAllStatusCheckContextsResponse.prototype, "reposGetAllStatusCheckContexts200ApplicationJsonStrings", void 0);
    return ReposGetAllStatusCheckContextsResponse;
}(SpeakeasyBase));
export { ReposGetAllStatusCheckContextsResponse };
