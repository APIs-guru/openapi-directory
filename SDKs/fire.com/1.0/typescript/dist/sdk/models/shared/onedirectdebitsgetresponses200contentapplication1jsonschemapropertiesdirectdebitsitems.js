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
import { OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency } from "./oneaccountsgetresponses200contentapplication1jsonschemapropertiesaccountsitemspropertiescurrency";
export var OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum;
(function (OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum) {
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum["Zero"] = "0";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum["One"] = "1";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum["Two"] = "2";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum["Three"] = "3";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum["Four"] = "4";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum["Five"] = "5";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum["Six"] = "6";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum["Seven"] = "7";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum["Eight"] = "8";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum["Nine"] = "9";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum["A"] = "A";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum["B"] = "B";
})(OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum || (OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum = {}));
export var OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum;
(function (OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum) {
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum["Recieved"] = "RECIEVED";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum["RejectRequested"] = "REJECT_REQUESTED";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum["RejectReadyForProcessing"] = "REJECT_READY_FOR_PROCESSING";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum["RejectRecordInProgress"] = "REJECT_RECORD_IN_PROGRESS";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum["RejectRecorded"] = "REJECT_RECORDED";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum["RejectFileCreated"] = "REJECT_FILE_CREATED";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum["RejectFileSent"] = "REJECT_FILE_SENT";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum["Collected"] = "COLLECTED";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum["RefundRequested"] = "REFUND_REQUESTED";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum["RefundRecordInProgress"] = "REFUND_RECORD_IN_PROGRESS";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum["RefundRecorded"] = "REFUND_RECORDED";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum["RefundFileCreated"] = "REFUND_FILE_CREATED";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum["RefundFileSent"] = "REFUND_FILE_SENT";
})(OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum || (OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum = {}));
export var OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum;
(function (OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum) {
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum["FirstCollection"] = "FIRST_COLLECTION";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum["OngoingCollection"] = "ONGOING_COLLECTION";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum["RepresentedCollection"] = "REPRESENTED_COLLECTION";
    OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum["FinalCollection"] = "FINAL_COLLECTION";
})(OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum || (OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum = {}));
var OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems = /** @class */ (function (_super) {
    __extends(OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems, _super);
    function OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateCreated" }),
        __metadata("design:type", Date)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directDebitReference" }),
        __metadata("design:type", String)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "directDebitReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directDebitUuid" }),
        __metadata("design:type", String)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "directDebitUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDDIC" }),
        __metadata("design:type", Boolean)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "isDdic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mandateUUid" }),
        __metadata("design:type", String)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "mandateUUid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originatorAlias" }),
        __metadata("design:type", String)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "originatorAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originatorName" }),
        __metadata("design:type", String)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "originatorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originatorReference" }),
        __metadata("design:type", String)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "originatorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemeRejectReason" }),
        __metadata("design:type", String)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "schemeRejectReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemeRejectReasonCode" }),
        __metadata("design:type", String)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "schemeRejectReasonCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetIcan" }),
        __metadata("design:type", Number)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "targetIcan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetPayeeId" }),
        __metadata("design:type", Number)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "targetPayeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems.prototype, "type", void 0);
    return OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems;
}(SpeakeasyBase));
export { OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems };
