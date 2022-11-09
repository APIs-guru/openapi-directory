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
var CreateTagPathParams = /** @class */ (function (_super) {
    __extends(CreateTagPathParams, _super);
    function CreateTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], CreateTagPathParams.prototype, "productId", void 0);
    return CreateTagPathParams;
}(SpeakeasyBase));
export { CreateTagPathParams };
var CreateTagRequests = /** @class */ (function (_super) {
    __extends(CreateTagRequests, _super);
    function CreateTagRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CreateTagModel)
    ], CreateTagRequests.prototype, "createTagModel", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateTagModel)
    ], CreateTagRequests.prototype, "createTagModel1", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CreateTagModel)
    ], CreateTagRequests.prototype, "createTagModel2", void 0);
    return CreateTagRequests;
}(SpeakeasyBase));
export { CreateTagRequests };
var CreateTagRequest = /** @class */ (function (_super) {
    __extends(CreateTagRequest, _super);
    function CreateTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTagPathParams)
    ], CreateTagRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateTagRequests)
    ], CreateTagRequest.prototype, "request", void 0);
    return CreateTagRequest;
}(SpeakeasyBase));
export { CreateTagRequest };
var CreateTagResponse = /** @class */ (function (_super) {
    __extends(CreateTagResponse, _super);
    function CreateTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateTagResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateTagResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TagModel)
    ], CreateTagResponse.prototype, "tagModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TagModelHaljson)
    ], CreateTagResponse.prototype, "tagModelHaljson", void 0);
    return CreateTagResponse;
}(SpeakeasyBase));
export { CreateTagResponse };
