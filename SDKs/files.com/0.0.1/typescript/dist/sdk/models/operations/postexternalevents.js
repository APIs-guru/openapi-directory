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
export var PostExternalEventsRequestBodyStatusEnum;
(function (PostExternalEventsRequestBodyStatusEnum) {
    PostExternalEventsRequestBodyStatusEnum["Success"] = "success";
    PostExternalEventsRequestBodyStatusEnum["Error"] = "error";
    PostExternalEventsRequestBodyStatusEnum["PartialFailure"] = "partial_failure";
})(PostExternalEventsRequestBodyStatusEnum || (PostExternalEventsRequestBodyStatusEnum = {}));
var PostExternalEventsRequestBody = /** @class */ (function (_super) {
    __extends(PostExternalEventsRequestBody, _super);
    function PostExternalEventsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=body" }),
        __metadata("design:type", String)
    ], PostExternalEventsRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=status" }),
        __metadata("design:type", String)
    ], PostExternalEventsRequestBody.prototype, "status", void 0);
    return PostExternalEventsRequestBody;
}(SpeakeasyBase));
export { PostExternalEventsRequestBody };
var PostExternalEventsRequest = /** @class */ (function (_super) {
    __extends(PostExternalEventsRequest, _super);
    function PostExternalEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostExternalEventsRequestBody)
    ], PostExternalEventsRequest.prototype, "request", void 0);
    return PostExternalEventsRequest;
}(SpeakeasyBase));
export { PostExternalEventsRequest };
var PostExternalEventsResponse = /** @class */ (function (_super) {
    __extends(PostExternalEventsResponse, _super);
    function PostExternalEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostExternalEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ExternalEventEntity)
    ], PostExternalEventsResponse.prototype, "externalEventEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostExternalEventsResponse.prototype, "statusCode", void 0);
    return PostExternalEventsResponse;
}(SpeakeasyBase));
export { PostExternalEventsResponse };
