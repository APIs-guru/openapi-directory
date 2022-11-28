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
import { Tag } from "./tag";
// Activation
/**
 * An activation registers one or more on-premises servers or virtual machines (VMs) with Amazon Web Services so that you can configure those servers or VMs using Run Command. A server or VM that has been registered with Amazon Web Services Systems Manager is called a managed instance.
**/
var Activation = /** @class */ (function (_super) {
    __extends(Activation, _super);
    function Activation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivationId" }),
        __metadata("design:type", String)
    ], Activation.prototype, "activationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], Activation.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultInstanceName" }),
        __metadata("design:type", String)
    ], Activation.prototype, "defaultInstanceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Activation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDate" }),
        __metadata("design:type", Date)
    ], Activation.prototype, "expirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Expired" }),
        __metadata("design:type", Boolean)
    ], Activation.prototype, "expired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IamRole" }),
        __metadata("design:type", String)
    ], Activation.prototype, "iamRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegistrationLimit" }),
        __metadata("design:type", Number)
    ], Activation.prototype, "registrationLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegistrationsCount" }),
        __metadata("design:type", Number)
    ], Activation.prototype, "registrationsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Activation.prototype, "tags", void 0);
    return Activation;
}(SpeakeasyBase));
export { Activation };
