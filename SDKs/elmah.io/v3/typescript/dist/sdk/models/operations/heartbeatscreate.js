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
var HeartbeatsCreatePathParams = /** @class */ (function (_super) {
    __extends(HeartbeatsCreatePathParams, _super);
    function HeartbeatsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], HeartbeatsCreatePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logId" }),
        __metadata("design:type", String)
    ], HeartbeatsCreatePathParams.prototype, "logId", void 0);
    return HeartbeatsCreatePathParams;
}(SpeakeasyBase));
export { HeartbeatsCreatePathParams };
var HeartbeatsCreateRequests = /** @class */ (function (_super) {
    __extends(HeartbeatsCreateRequests, _super);
    function HeartbeatsCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CreateHeartbeat)
    ], HeartbeatsCreateRequests.prototype, "createHeartbeat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateHeartbeat)
    ], HeartbeatsCreateRequests.prototype, "createHeartbeat1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.CreateHeartbeat)
    ], HeartbeatsCreateRequests.prototype, "createHeartbeat2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CreateHeartbeat)
    ], HeartbeatsCreateRequests.prototype, "createHeartbeat3", void 0);
    return HeartbeatsCreateRequests;
}(SpeakeasyBase));
export { HeartbeatsCreateRequests };
var HeartbeatsCreateRequest = /** @class */ (function (_super) {
    __extends(HeartbeatsCreateRequest, _super);
    function HeartbeatsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HeartbeatsCreatePathParams)
    ], HeartbeatsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HeartbeatsCreateRequests)
    ], HeartbeatsCreateRequest.prototype, "request", void 0);
    return HeartbeatsCreateRequest;
}(SpeakeasyBase));
export { HeartbeatsCreateRequest };
var HeartbeatsCreateResponse = /** @class */ (function (_super) {
    __extends(HeartbeatsCreateResponse, _super);
    function HeartbeatsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HeartbeatsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HeartbeatsCreateResponse.prototype, "statusCode", void 0);
    return HeartbeatsCreateResponse;
}(SpeakeasyBase));
export { HeartbeatsCreateResponse };
