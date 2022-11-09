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
var UpdateTagPathParams = /** @class */ (function (_super) {
    __extends(UpdateTagPathParams, _super);
    function UpdateTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" }),
        __metadata("design:type", Number)
    ], UpdateTagPathParams.prototype, "tagId", void 0);
    return UpdateTagPathParams;
}(SpeakeasyBase));
export { UpdateTagPathParams };
var UpdateTagRequests = /** @class */ (function (_super) {
    __extends(UpdateTagRequests, _super);
    function UpdateTagRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.UpdateTagModel)
    ], UpdateTagRequests.prototype, "updateTagModel", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateTagModel)
    ], UpdateTagRequests.prototype, "updateTagModel1", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UpdateTagModel)
    ], UpdateTagRequests.prototype, "updateTagModel2", void 0);
    return UpdateTagRequests;
}(SpeakeasyBase));
export { UpdateTagRequests };
var UpdateTagRequest = /** @class */ (function (_super) {
    __extends(UpdateTagRequest, _super);
    function UpdateTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateTagPathParams)
    ], UpdateTagRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateTagRequests)
    ], UpdateTagRequest.prototype, "request", void 0);
    return UpdateTagRequest;
}(SpeakeasyBase));
export { UpdateTagRequest };
var UpdateTagResponse = /** @class */ (function (_super) {
    __extends(UpdateTagResponse, _super);
    function UpdateTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateTagResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateTagResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TagModel)
    ], UpdateTagResponse.prototype, "tagModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TagModelHaljson)
    ], UpdateTagResponse.prototype, "tagModelHaljson", void 0);
    return UpdateTagResponse;
}(SpeakeasyBase));
export { UpdateTagResponse };
