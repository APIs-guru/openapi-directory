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
var CreateApiApplicationNewApiApplication = /** @class */ (function (_super) {
    __extends(CreateApiApplicationNewApiApplication, _super);
    function CreateApiApplicationNewApiApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationName" }),
        __metadata("design:type", String)
    ], CreateApiApplicationNewApiApplication.prototype, "applicationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], CreateApiApplicationNewApiApplication.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiry" }),
        __metadata("design:type", Date)
    ], CreateApiApplicationNewApiApplication.prototype, "expiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ican" }),
        __metadata("design:type", Number)
    ], CreateApiApplicationNewApiApplication.prototype, "ican", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfPayeeApprovalsRequired" }),
        __metadata("design:type", Number)
    ], CreateApiApplicationNewApiApplication.prototype, "numberOfPayeeApprovalsRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfPaymentApprovalsRequired" }),
        __metadata("design:type", Number)
    ], CreateApiApplicationNewApiApplication.prototype, "numberOfPaymentApprovalsRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", Array)
    ], CreateApiApplicationNewApiApplication.prototype, "permissions", void 0);
    return CreateApiApplicationNewApiApplication;
}(SpeakeasyBase));
export { CreateApiApplicationNewApiApplication };
var CreateApiApplicationApiApplication = /** @class */ (function (_super) {
    __extends(CreateApiApplicationApiApplication, _super);
    function CreateApiApplicationApiApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applicationId" }),
        __metadata("design:type", Number)
    ], CreateApiApplicationApiApplication.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], CreateApiApplicationApiApplication.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientKey" }),
        __metadata("design:type", String)
    ], CreateApiApplicationApiApplication.prototype, "clientKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], CreateApiApplicationApiApplication.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiry" }),
        __metadata("design:type", Date)
    ], CreateApiApplicationApiApplication.prototype, "expiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ican" }),
        __metadata("design:type", Number)
    ], CreateApiApplicationApiApplication.prototype, "ican", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfPayeeApprovalsRequired" }),
        __metadata("design:type", Number)
    ], CreateApiApplicationApiApplication.prototype, "numberOfPayeeApprovalsRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfPaymentApprovalsRequired" }),
        __metadata("design:type", Number)
    ], CreateApiApplicationApiApplication.prototype, "numberOfPaymentApprovalsRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refreshToken" }),
        __metadata("design:type", String)
    ], CreateApiApplicationApiApplication.prototype, "refreshToken", void 0);
    return CreateApiApplicationApiApplication;
}(SpeakeasyBase));
export { CreateApiApplicationApiApplication };
var CreateApiApplicationRequest = /** @class */ (function (_super) {
    __extends(CreateApiApplicationRequest, _super);
    function CreateApiApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateApiApplicationNewApiApplication)
    ], CreateApiApplicationRequest.prototype, "request", void 0);
    return CreateApiApplicationRequest;
}(SpeakeasyBase));
export { CreateApiApplicationRequest };
var CreateApiApplicationResponse = /** @class */ (function (_super) {
    __extends(CreateApiApplicationResponse, _super);
    function CreateApiApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateApiApplicationApiApplication)
    ], CreateApiApplicationResponse.prototype, "apiApplication", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateApiApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateApiApplicationResponse.prototype, "statusCode", void 0);
    return CreateApiApplicationResponse;
}(SpeakeasyBase));
export { CreateApiApplicationResponse };
