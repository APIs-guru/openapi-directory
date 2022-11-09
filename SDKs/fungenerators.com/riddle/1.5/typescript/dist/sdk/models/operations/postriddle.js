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
var PostRiddleQueryParams = /** @class */ (function (_super) {
    __extends(PostRiddleQueryParams, _super);
    function PostRiddleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=answer" }),
        __metadata("design:type", String)
    ], PostRiddleQueryParams.prototype, "answer", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], PostRiddleQueryParams.prototype, "category", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=question" }),
        __metadata("design:type", String)
    ], PostRiddleQueryParams.prototype, "question", void 0);
    return PostRiddleQueryParams;
}(SpeakeasyBase));
export { PostRiddleQueryParams };
var PostRiddleSecurity = /** @class */ (function (_super) {
    __extends(PostRiddleSecurity, _super);
    function PostRiddleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXFungeneratorsApiSecret)
    ], PostRiddleSecurity.prototype, "xFungeneratorsApiSecret", void 0);
    return PostRiddleSecurity;
}(SpeakeasyBase));
export { PostRiddleSecurity };
var PostRiddleRequest = /** @class */ (function (_super) {
    __extends(PostRiddleRequest, _super);
    function PostRiddleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostRiddleQueryParams)
    ], PostRiddleRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostRiddleSecurity)
    ], PostRiddleRequest.prototype, "security", void 0);
    return PostRiddleRequest;
}(SpeakeasyBase));
export { PostRiddleRequest };
var PostRiddleResponse = /** @class */ (function (_super) {
    __extends(PostRiddleResponse, _super);
    function PostRiddleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostRiddleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostRiddleResponse.prototype, "statusCode", void 0);
    return PostRiddleResponse;
}(SpeakeasyBase));
export { PostRiddleResponse };
