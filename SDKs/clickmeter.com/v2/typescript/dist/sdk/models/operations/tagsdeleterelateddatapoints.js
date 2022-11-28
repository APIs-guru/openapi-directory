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
var TagsDeleteRelatedDatapointsPathParams = /** @class */ (function (_super) {
    __extends(TagsDeleteRelatedDatapointsPathParams, _super);
    function TagsDeleteRelatedDatapointsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" }),
        __metadata("design:type", Number)
    ], TagsDeleteRelatedDatapointsPathParams.prototype, "tagId", void 0);
    return TagsDeleteRelatedDatapointsPathParams;
}(SpeakeasyBase));
export { TagsDeleteRelatedDatapointsPathParams };
var TagsDeleteRelatedDatapointsRequest = /** @class */ (function (_super) {
    __extends(TagsDeleteRelatedDatapointsRequest, _super);
    function TagsDeleteRelatedDatapointsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TagsDeleteRelatedDatapointsPathParams)
    ], TagsDeleteRelatedDatapointsRequest.prototype, "pathParams", void 0);
    return TagsDeleteRelatedDatapointsRequest;
}(SpeakeasyBase));
export { TagsDeleteRelatedDatapointsRequest };
var TagsDeleteRelatedDatapointsResponse = /** @class */ (function (_super) {
    __extends(TagsDeleteRelatedDatapointsResponse, _super);
    function TagsDeleteRelatedDatapointsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntityUriSystemInt64)
    ], TagsDeleteRelatedDatapointsResponse.prototype, "apiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TagsDeleteRelatedDatapointsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TagsDeleteRelatedDatapointsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TagsDeleteRelatedDatapointsResponse.prototype, "statusCode", void 0);
    return TagsDeleteRelatedDatapointsResponse;
}(SpeakeasyBase));
export { TagsDeleteRelatedDatapointsResponse };
