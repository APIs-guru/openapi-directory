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
var GetDirectDebitsForMandateUuidQueryParams = /** @class */ (function (_super) {
    __extends(GetDirectDebitsForMandateUuidQueryParams, _super);
    function GetDirectDebitsForMandateUuidQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mandateUuid" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidQueryParams.prototype, "mandateUuid", void 0);
    return GetDirectDebitsForMandateUuidQueryParams;
}(SpeakeasyBase));
export { GetDirectDebitsForMandateUuidQueryParams };
export var GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum;
(function (GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum) {
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Zero"] = "0";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["One"] = "1";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Two"] = "2";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Three"] = "3";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Four"] = "4";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Five"] = "5";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Six"] = "6";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Seven"] = "7";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Eight"] = "8";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Nine"] = "9";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["A"] = "A";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["B"] = "B";
})(GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum || (GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum = {}));
export var GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum;
(function (GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum) {
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["Recieved"] = "RECIEVED";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RejectRequested"] = "REJECT_REQUESTED";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RejectReadyForProcessing"] = "REJECT_READY_FOR_PROCESSING";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RejectRecordInProgress"] = "REJECT_RECORD_IN_PROGRESS";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RejectRecorded"] = "REJECT_RECORDED";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RejectFileCreated"] = "REJECT_FILE_CREATED";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RejectFileSent"] = "REJECT_FILE_SENT";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["Collected"] = "COLLECTED";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RefundRequested"] = "REFUND_REQUESTED";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RefundRecordInProgress"] = "REFUND_RECORD_IN_PROGRESS";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RefundRecorded"] = "REFUND_RECORDED";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RefundFileCreated"] = "REFUND_FILE_CREATED";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RefundFileSent"] = "REFUND_FILE_SENT";
})(GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum || (GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum = {}));
export var GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum;
(function (GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum) {
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum["FirstCollection"] = "FIRST_COLLECTION";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum["OngoingCollection"] = "ONGOING_COLLECTION";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum["RepresentedCollection"] = "REPRESENTED_COLLECTION";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum["FinalCollection"] = "FINAL_COLLECTION";
})(GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum || (GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum = {}));
var GetDirectDebitsForMandateUuidDirectDebitsDirectDebit = /** @class */ (function (_super) {
    __extends(GetDirectDebitsForMandateUuidDirectDebitsDirectDebit, _super);
    function GetDirectDebitsForMandateUuidDirectDebitsDirectDebit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateCreated" }),
        __metadata("design:type", Date)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directDebitReference" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "directDebitReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directDebitUuid" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "directDebitUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDDIC" }),
        __metadata("design:type", Boolean)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "isDdic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mandateUUid" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "mandateUUid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originatorAlias" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "originatorAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originatorName" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "originatorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originatorReference" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "originatorReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemeRejectReason" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "schemeRejectReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemeRejectReasonCode" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "schemeRejectReasonCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetIcan" }),
        __metadata("design:type", Number)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "targetIcan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetPayeeId" }),
        __metadata("design:type", Number)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "targetPayeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "type", void 0);
    return GetDirectDebitsForMandateUuidDirectDebitsDirectDebit;
}(SpeakeasyBase));
export { GetDirectDebitsForMandateUuidDirectDebitsDirectDebit };
var GetDirectDebitsForMandateUuidDirectDebits = /** @class */ (function (_super) {
    __extends(GetDirectDebitsForMandateUuidDirectDebits, _super);
    function GetDirectDebitsForMandateUuidDirectDebits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directdebits", elemType: GetDirectDebitsForMandateUuidDirectDebitsDirectDebit }),
        __metadata("design:type", Array)
    ], GetDirectDebitsForMandateUuidDirectDebits.prototype, "directdebits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetDirectDebitsForMandateUuidDirectDebits.prototype, "total", void 0);
    return GetDirectDebitsForMandateUuidDirectDebits;
}(SpeakeasyBase));
export { GetDirectDebitsForMandateUuidDirectDebits };
var GetDirectDebitsForMandateUuidRequest = /** @class */ (function (_super) {
    __extends(GetDirectDebitsForMandateUuidRequest, _super);
    function GetDirectDebitsForMandateUuidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDirectDebitsForMandateUuidQueryParams)
    ], GetDirectDebitsForMandateUuidRequest.prototype, "queryParams", void 0);
    return GetDirectDebitsForMandateUuidRequest;
}(SpeakeasyBase));
export { GetDirectDebitsForMandateUuidRequest };
var GetDirectDebitsForMandateUuidResponse = /** @class */ (function (_super) {
    __extends(GetDirectDebitsForMandateUuidResponse, _super);
    function GetDirectDebitsForMandateUuidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDirectDebitsForMandateUuidDirectDebits)
    ], GetDirectDebitsForMandateUuidResponse.prototype, "directDebits", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDirectDebitsForMandateUuidResponse.prototype, "statusCode", void 0);
    return GetDirectDebitsForMandateUuidResponse;
}(SpeakeasyBase));
export { GetDirectDebitsForMandateUuidResponse };
