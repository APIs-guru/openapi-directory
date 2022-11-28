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
var AddOrUpdateIntegrationLinkPathParams = /** @class */ (function (_super) {
    __extends(AddOrUpdateIntegrationLinkPathParams, _super);
    function AddOrUpdateIntegrationLinkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], AddOrUpdateIntegrationLinkPathParams.prototype, "environmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=integrationLinkType" }),
        __metadata("design:type", String)
    ], AddOrUpdateIntegrationLinkPathParams.prototype, "integrationLinkType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], AddOrUpdateIntegrationLinkPathParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingId" }),
        __metadata("design:type", Number)
    ], AddOrUpdateIntegrationLinkPathParams.prototype, "settingId", void 0);
    return AddOrUpdateIntegrationLinkPathParams;
}(SpeakeasyBase));
export { AddOrUpdateIntegrationLinkPathParams };
var AddOrUpdateIntegrationLinkRequests = /** @class */ (function (_super) {
    __extends(AddOrUpdateIntegrationLinkRequests, _super);
    function AddOrUpdateIntegrationLinkRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.AddOrUpdateIntegrationLinkModel)
    ], AddOrUpdateIntegrationLinkRequests.prototype, "addOrUpdateIntegrationLinkModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddOrUpdateIntegrationLinkModel)
    ], AddOrUpdateIntegrationLinkRequests.prototype, "addOrUpdateIntegrationLinkModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.AddOrUpdateIntegrationLinkModel)
    ], AddOrUpdateIntegrationLinkRequests.prototype, "addOrUpdateIntegrationLinkModel2", void 0);
    return AddOrUpdateIntegrationLinkRequests;
}(SpeakeasyBase));
export { AddOrUpdateIntegrationLinkRequests };
var AddOrUpdateIntegrationLinkRequest = /** @class */ (function (_super) {
    __extends(AddOrUpdateIntegrationLinkRequest, _super);
    function AddOrUpdateIntegrationLinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddOrUpdateIntegrationLinkPathParams)
    ], AddOrUpdateIntegrationLinkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddOrUpdateIntegrationLinkRequests)
    ], AddOrUpdateIntegrationLinkRequest.prototype, "request", void 0);
    return AddOrUpdateIntegrationLinkRequest;
}(SpeakeasyBase));
export { AddOrUpdateIntegrationLinkRequest };
var AddOrUpdateIntegrationLinkResponse = /** @class */ (function (_super) {
    __extends(AddOrUpdateIntegrationLinkResponse, _super);
    function AddOrUpdateIntegrationLinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddOrUpdateIntegrationLinkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IntegrationLinkModel)
    ], AddOrUpdateIntegrationLinkResponse.prototype, "integrationLinkModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddOrUpdateIntegrationLinkResponse.prototype, "statusCode", void 0);
    return AddOrUpdateIntegrationLinkResponse;
}(SpeakeasyBase));
export { AddOrUpdateIntegrationLinkResponse };
