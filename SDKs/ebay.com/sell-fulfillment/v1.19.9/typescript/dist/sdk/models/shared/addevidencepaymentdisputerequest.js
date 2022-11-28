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
import { FileEvidence } from "./fileevidence";
import { OrderLineItems } from "./orderlineitems";
// AddEvidencePaymentDisputeRequest
/**
 * This type is used by the request payload of the addEvidence method. The addEvidence method is used to create a new evidence set against a payment dispute with one or more evidence files.
**/
var AddEvidencePaymentDisputeRequest = /** @class */ (function (_super) {
    __extends(AddEvidencePaymentDisputeRequest, _super);
    function AddEvidencePaymentDisputeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evidenceType" }),
        __metadata("design:type", String)
    ], AddEvidencePaymentDisputeRequest.prototype, "evidenceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files", elemType: FileEvidence }),
        __metadata("design:type", Array)
    ], AddEvidencePaymentDisputeRequest.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItems", elemType: OrderLineItems }),
        __metadata("design:type", Array)
    ], AddEvidencePaymentDisputeRequest.prototype, "lineItems", void 0);
    return AddEvidencePaymentDisputeRequest;
}(SpeakeasyBase));
export { AddEvidencePaymentDisputeRequest };
