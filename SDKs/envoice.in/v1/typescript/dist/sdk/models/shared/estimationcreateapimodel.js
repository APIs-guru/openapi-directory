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
import { EstimationCreateAttachmentApiModel } from "./estimationcreateattachmentapimodel";
import { EstimationCreateItemApiModel } from "./estimationcreateitemapimodel";
import { EstimationGatewayApiModel } from "./estimationgatewayapimodel";
export var EstimationCreateApiModelStatusEnum;
(function (EstimationCreateApiModelStatusEnum) {
    EstimationCreateApiModelStatusEnum["Draft"] = "Draft";
    EstimationCreateApiModelStatusEnum["Accepted"] = "Accepted";
    EstimationCreateApiModelStatusEnum["Rejected"] = "Rejected";
})(EstimationCreateApiModelStatusEnum || (EstimationCreateApiModelStatusEnum = {}));
var EstimationCreateApiModel = /** @class */ (function (_super) {
    __extends(EstimationCreateApiModel, _super);
    function EstimationCreateApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attachments", elemType: EstimationCreateAttachmentApiModel }),
        __metadata("design:type", Array)
    ], EstimationCreateApiModel.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientId" }),
        __metadata("design:type", Number)
    ], EstimationCreateApiModel.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClonedFromId" }),
        __metadata("design:type", Number)
    ], EstimationCreateApiModel.prototype, "clonedFromId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyId" }),
        __metadata("design:type", Number)
    ], EstimationCreateApiModel.prototype, "currencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpiresOn" }),
        __metadata("design:type", Date)
    ], EstimationCreateApiModel.prototype, "expiresOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IssuedOn" }),
        __metadata("design:type", Date)
    ], EstimationCreateApiModel.prototype, "issuedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Items", elemType: EstimationCreateItemApiModel }),
        __metadata("design:type", Array)
    ], EstimationCreateApiModel.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], EstimationCreateApiModel.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Number" }),
        __metadata("design:type", String)
    ], EstimationCreateApiModel.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentGateways", elemType: EstimationGatewayApiModel }),
        __metadata("design:type", Array)
    ], EstimationCreateApiModel.prototype, "paymentGateways", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PoNumber" }),
        __metadata("design:type", String)
    ], EstimationCreateApiModel.prototype, "poNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], EstimationCreateApiModel.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Terms" }),
        __metadata("design:type", String)
    ], EstimationCreateApiModel.prototype, "terms", void 0);
    return EstimationCreateApiModel;
}(SpeakeasyBase));
export { EstimationCreateApiModel };
