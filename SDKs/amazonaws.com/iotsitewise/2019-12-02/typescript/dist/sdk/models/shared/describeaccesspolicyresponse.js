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
import { Identity } from "./identity";
import { PermissionEnum } from "./permissionenum";
import { Resource } from "./resource";
var DescribeAccessPolicyResponse = /** @class */ (function (_super) {
    __extends(DescribeAccessPolicyResponse, _super);
    function DescribeAccessPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicyArn" }),
        __metadata("design:type", String)
    ], DescribeAccessPolicyResponse.prototype, "accessPolicyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicyCreationDate" }),
        __metadata("design:type", Date)
    ], DescribeAccessPolicyResponse.prototype, "accessPolicyCreationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicyId" }),
        __metadata("design:type", String)
    ], DescribeAccessPolicyResponse.prototype, "accessPolicyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicyIdentity" }),
        __metadata("design:type", Identity)
    ], DescribeAccessPolicyResponse.prototype, "accessPolicyIdentity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicyLastUpdateDate" }),
        __metadata("design:type", Date)
    ], DescribeAccessPolicyResponse.prototype, "accessPolicyLastUpdateDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicyPermission" }),
        __metadata("design:type", String)
    ], DescribeAccessPolicyResponse.prototype, "accessPolicyPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicyResource" }),
        __metadata("design:type", Resource)
    ], DescribeAccessPolicyResponse.prototype, "accessPolicyResource", void 0);
    return DescribeAccessPolicyResponse;
}(SpeakeasyBase));
export { DescribeAccessPolicyResponse };
