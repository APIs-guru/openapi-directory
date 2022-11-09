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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
import { StatusValuesEnum } from "./statusvaluesenum";
import { TargetTypeEnum } from "./targettypeenum";
// AccountAssignmentOperationStatus
/**
 * The status of the creation or deletion operation of an assignment that a principal needs to access an account.
**/
var AccountAssignmentOperationStatus = /** @class */ (function (_super) {
    __extends(AccountAssignmentOperationStatus, _super);
    function AccountAssignmentOperationStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], AccountAssignmentOperationStatus.prototype, "createdDate", void 0);
    __decorate([
        Metadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], AccountAssignmentOperationStatus.prototype, "failureReason", void 0);
    __decorate([
        Metadata({ data: "json, name=PermissionSetArn" }),
        __metadata("design:type", String)
    ], AccountAssignmentOperationStatus.prototype, "permissionSetArn", void 0);
    __decorate([
        Metadata({ data: "json, name=PrincipalId" }),
        __metadata("design:type", String)
    ], AccountAssignmentOperationStatus.prototype, "principalId", void 0);
    __decorate([
        Metadata({ data: "json, name=PrincipalType" }),
        __metadata("design:type", String)
    ], AccountAssignmentOperationStatus.prototype, "principalType", void 0);
    __decorate([
        Metadata({ data: "json, name=RequestId" }),
        __metadata("design:type", String)
    ], AccountAssignmentOperationStatus.prototype, "requestId", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], AccountAssignmentOperationStatus.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=TargetId" }),
        __metadata("design:type", String)
    ], AccountAssignmentOperationStatus.prototype, "targetId", void 0);
    __decorate([
        Metadata({ data: "json, name=TargetType" }),
        __metadata("design:type", String)
    ], AccountAssignmentOperationStatus.prototype, "targetType", void 0);
    return AccountAssignmentOperationStatus;
}(SpeakeasyBase));
export { AccountAssignmentOperationStatus };
