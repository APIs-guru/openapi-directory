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
var ForumGetPostAndParentPathParams = /** @class */ (function (_super) {
    __extends(ForumGetPostAndParentPathParams, _super);
    function ForumGetPostAndParentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=childPostId" }),
        __metadata("design:type", Number)
    ], ForumGetPostAndParentPathParams.prototype, "childPostId", void 0);
    return ForumGetPostAndParentPathParams;
}(SpeakeasyBase));
export { ForumGetPostAndParentPathParams };
var ForumGetPostAndParentQueryParams = /** @class */ (function (_super) {
    __extends(ForumGetPostAndParentQueryParams, _super);
    function ForumGetPostAndParentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=showbanned" }),
        __metadata("design:type", String)
    ], ForumGetPostAndParentQueryParams.prototype, "showbanned", void 0);
    return ForumGetPostAndParentQueryParams;
}(SpeakeasyBase));
export { ForumGetPostAndParentQueryParams };
var ForumGetPostAndParentRequest = /** @class */ (function (_super) {
    __extends(ForumGetPostAndParentRequest, _super);
    function ForumGetPostAndParentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ForumGetPostAndParentPathParams)
    ], ForumGetPostAndParentRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ForumGetPostAndParentQueryParams)
    ], ForumGetPostAndParentRequest.prototype, "queryParams", void 0);
    return ForumGetPostAndParentRequest;
}(SpeakeasyBase));
export { ForumGetPostAndParentRequest };
var ForumGetPostAndParentResponse = /** @class */ (function (_super) {
    __extends(ForumGetPostAndParentResponse, _super);
    function ForumGetPostAndParentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ForumGetPostAndParentResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ForumGetPostAndParentResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ForumGetPostAndParentResponse.prototype, "statusCode", void 0);
    return ForumGetPostAndParentResponse;
}(SpeakeasyBase));
export { ForumGetPostAndParentResponse };
