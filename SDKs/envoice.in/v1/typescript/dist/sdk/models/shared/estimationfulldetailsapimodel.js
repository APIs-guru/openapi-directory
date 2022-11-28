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
import { EstimationActivityApiModel } from "./estimationactivityapimodel";
import { EstimationAttachmentApiModel } from "./estimationattachmentapimodel";
import { ClientDetailsApiModel } from "./clientdetailsapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { EstimationItemApiModel } from "./estimationitemapimodel";
import { EstimationGatewayApiModel } from "./estimationgatewayapimodel";
export var EstimationFullDetailsApiModelStatusEnum;
(function (EstimationFullDetailsApiModelStatusEnum) {
    EstimationFullDetailsApiModelStatusEnum["Draft"] = "Draft";
    EstimationFullDetailsApiModelStatusEnum["Accepted"] = "Accepted";
    EstimationFullDetailsApiModelStatusEnum["Rejected"] = "Rejected";
})(EstimationFullDetailsApiModelStatusEnum || (EstimationFullDetailsApiModelStatusEnum = {}));
var EstimationFullDetailsApiModel = /** @class */ (function (_super) {
    __extends(EstimationFullDetailsApiModel, _super);
    function EstimationFullDetailsApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessToken" }),
        __metadata("design:type", String)
    ], EstimationFullDetailsApiModel.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Activities", elemType: EstimationActivityApiModel }),
        __metadata("design:type", Array)
    ], EstimationFullDetailsApiModel.prototype, "activities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attachments", elemType: EstimationAttachmentApiModel }),
        __metadata("design:type", Array)
    ], EstimationFullDetailsApiModel.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Client" }),
        __metadata("design:type", ClientDetailsApiModel)
    ], EstimationFullDetailsApiModel.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClonedFromId" }),
        __metadata("design:type", Number)
    ], EstimationFullDetailsApiModel.prototype, "clonedFromId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", CurrencyDetailsApiModel)
    ], EstimationFullDetailsApiModel.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DiscountAmount" }),
        __metadata("design:type", Number)
    ], EstimationFullDetailsApiModel.prototype, "discountAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpiresOn" }),
        __metadata("design:type", Date)
    ], EstimationFullDetailsApiModel.prototype, "expiresOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], EstimationFullDetailsApiModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IssuedOn" }),
        __metadata("design:type", Date)
    ], EstimationFullDetailsApiModel.prototype, "issuedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Items", elemType: EstimationItemApiModel }),
        __metadata("design:type", Array)
    ], EstimationFullDetailsApiModel.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], EstimationFullDetailsApiModel.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Number" }),
        __metadata("design:type", String)
    ], EstimationFullDetailsApiModel.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentGateways", elemType: EstimationGatewayApiModel }),
        __metadata("design:type", Array)
    ], EstimationFullDetailsApiModel.prototype, "paymentGateways", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PoNumber" }),
        __metadata("design:type", String)
    ], EstimationFullDetailsApiModel.prototype, "poNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], EstimationFullDetailsApiModel.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubTotalAmount" }),
        __metadata("design:type", Number)
    ], EstimationFullDetailsApiModel.prototype, "subTotalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxAmount" }),
        __metadata("design:type", Number)
    ], EstimationFullDetailsApiModel.prototype, "taxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Terms" }),
        __metadata("design:type", String)
    ], EstimationFullDetailsApiModel.prototype, "terms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalAmount" }),
        __metadata("design:type", Number)
    ], EstimationFullDetailsApiModel.prototype, "totalAmount", void 0);
    return EstimationFullDetailsApiModel;
}(SpeakeasyBase));
export { EstimationFullDetailsApiModel };
