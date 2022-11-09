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
import { Identity } from "./identity";
import { PermissionEnum } from "./permissionenum";
import { Resource } from "./resource";
// AccessPolicySummary
/**
 * Contains an access policy that defines an identity's access to an IoT SiteWise Monitor resource.
**/
var AccessPolicySummary = /** @class */ (function (_super) {
    __extends(AccessPolicySummary, _super);
    function AccessPolicySummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=creationDate" }),
        __metadata("design:type", Date)
    ], AccessPolicySummary.prototype, "creationDate", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AccessPolicySummary.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=identity" }),
        __metadata("design:type", Identity)
    ], AccessPolicySummary.prototype, "identity", void 0);
    __decorate([
        Metadata({ data: "json, name=lastUpdateDate" }),
        __metadata("design:type", Date)
    ], AccessPolicySummary.prototype, "lastUpdateDate", void 0);
    __decorate([
        Metadata({ data: "json, name=permission" }),
        __metadata("design:type", String)
    ], AccessPolicySummary.prototype, "permission", void 0);
    __decorate([
        Metadata({ data: "json, name=resource" }),
        __metadata("design:type", Resource)
    ], AccessPolicySummary.prototype, "resource", void 0);
    return AccessPolicySummary;
}(SpeakeasyBase));
export { AccessPolicySummary };
