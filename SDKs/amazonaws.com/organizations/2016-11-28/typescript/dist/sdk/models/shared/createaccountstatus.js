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
import { CreateAccountFailureReasonEnum } from "./createaccountfailurereasonenum";
import { CreateAccountStateEnum } from "./createaccountstateenum";
// CreateAccountStatus
/**
 * Contains the status about a <a>CreateAccount</a> or <a>CreateGovCloudAccount</a> request to create an AWS account or an AWS GovCloud (US) account in an organization.
**/
var CreateAccountStatus = /** @class */ (function (_super) {
    __extends(CreateAccountStatus, _super);
    function CreateAccountStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], CreateAccountStatus.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountName" }),
        __metadata("design:type", String)
    ], CreateAccountStatus.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletedTimestamp" }),
        __metadata("design:type", Date)
    ], CreateAccountStatus.prototype, "completedTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], CreateAccountStatus.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GovCloudAccountId" }),
        __metadata("design:type", String)
    ], CreateAccountStatus.prototype, "govCloudAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], CreateAccountStatus.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedTimestamp" }),
        __metadata("design:type", Date)
    ], CreateAccountStatus.prototype, "requestedTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], CreateAccountStatus.prototype, "state", void 0);
    return CreateAccountStatus;
}(SpeakeasyBase));
export { CreateAccountStatus };
