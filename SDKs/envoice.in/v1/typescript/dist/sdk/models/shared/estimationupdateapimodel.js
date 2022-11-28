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
import { EstimationUpdateAttachmentApiModel } from "./estimationupdateattachmentapimodel";
import { EstimationUpdateItemApiModel } from "./estimationupdateitemapimodel";
import { EstimationGatewayApiModel } from "./estimationgatewayapimodel";
export var EstimationUpdateApiModelStatusEnum;
(function (EstimationUpdateApiModelStatusEnum) {
    EstimationUpdateApiModelStatusEnum["Draft"] = "Draft";
    EstimationUpdateApiModelStatusEnum["Accepted"] = "Accepted";
    EstimationUpdateApiModelStatusEnum["Rejected"] = "Rejected";
})(EstimationUpdateApiModelStatusEnum || (EstimationUpdateApiModelStatusEnum = {}));
var EstimationUpdateApiModel = /** @class */ (function (_super) {
    __extends(EstimationUpdateApiModel, _super);
    function EstimationUpdateApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attachments", elemType: EstimationUpdateAttachmentApiModel }),
        __metadata("design:type", Array)
    ], EstimationUpdateApiModel.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientId" }),
        __metadata("design:type", Number)
    ], EstimationUpdateApiModel.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClonedFromId" }),
        __metadata("design:type", Number)
    ], EstimationUpdateApiModel.prototype, "clonedFromId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyId" }),
        __metadata("design:type", Number)
    ], EstimationUpdateApiModel.prototype, "currencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpiresOn" }),
        __metadata("design:type", Date)
    ], EstimationUpdateApiModel.prototype, "expiresOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], EstimationUpdateApiModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IssuedOn" }),
        __metadata("design:type", Date)
    ], EstimationUpdateApiModel.prototype, "issuedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Items", elemType: EstimationUpdateItemApiModel }),
        __metadata("design:type", Array)
    ], EstimationUpdateApiModel.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], EstimationUpdateApiModel.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Number" }),
        __metadata("design:type", String)
    ], EstimationUpdateApiModel.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentGateways", elemType: EstimationGatewayApiModel }),
        __metadata("design:type", Array)
    ], EstimationUpdateApiModel.prototype, "paymentGateways", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PoNumber" }),
        __metadata("design:type", String)
    ], EstimationUpdateApiModel.prototype, "poNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], EstimationUpdateApiModel.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Terms" }),
        __metadata("design:type", String)
    ], EstimationUpdateApiModel.prototype, "terms", void 0);
    return EstimationUpdateApiModel;
}(SpeakeasyBase));
export { EstimationUpdateApiModel };
