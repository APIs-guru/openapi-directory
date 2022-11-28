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
var ForumGetPostAndParentAwaitingApprovalPathParams = /** @class */ (function (_super) {
    __extends(ForumGetPostAndParentAwaitingApprovalPathParams, _super);
    function ForumGetPostAndParentAwaitingApprovalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=childPostId" }),
        __metadata("design:type", Number)
    ], ForumGetPostAndParentAwaitingApprovalPathParams.prototype, "childPostId", void 0);
    return ForumGetPostAndParentAwaitingApprovalPathParams;
}(SpeakeasyBase));
export { ForumGetPostAndParentAwaitingApprovalPathParams };
var ForumGetPostAndParentAwaitingApprovalQueryParams = /** @class */ (function (_super) {
    __extends(ForumGetPostAndParentAwaitingApprovalQueryParams, _super);
    function ForumGetPostAndParentAwaitingApprovalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showbanned" }),
        __metadata("design:type", String)
    ], ForumGetPostAndParentAwaitingApprovalQueryParams.prototype, "showbanned", void 0);
    return ForumGetPostAndParentAwaitingApprovalQueryParams;
}(SpeakeasyBase));
export { ForumGetPostAndParentAwaitingApprovalQueryParams };
var ForumGetPostAndParentAwaitingApprovalRequest = /** @class */ (function (_super) {
    __extends(ForumGetPostAndParentAwaitingApprovalRequest, _super);
    function ForumGetPostAndParentAwaitingApprovalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ForumGetPostAndParentAwaitingApprovalPathParams)
    ], ForumGetPostAndParentAwaitingApprovalRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ForumGetPostAndParentAwaitingApprovalQueryParams)
    ], ForumGetPostAndParentAwaitingApprovalRequest.prototype, "queryParams", void 0);
    return ForumGetPostAndParentAwaitingApprovalRequest;
}(SpeakeasyBase));
export { ForumGetPostAndParentAwaitingApprovalRequest };
var ForumGetPostAndParentAwaitingApprovalResponse = /** @class */ (function (_super) {
    __extends(ForumGetPostAndParentAwaitingApprovalResponse, _super);
    function ForumGetPostAndParentAwaitingApprovalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ForumGetPostAndParentAwaitingApprovalResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ForumGetPostAndParentAwaitingApprovalResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ForumGetPostAndParentAwaitingApprovalResponse.prototype, "statusCode", void 0);
    return ForumGetPostAndParentAwaitingApprovalResponse;
}(SpeakeasyBase));
export { ForumGetPostAndParentAwaitingApprovalResponse };
