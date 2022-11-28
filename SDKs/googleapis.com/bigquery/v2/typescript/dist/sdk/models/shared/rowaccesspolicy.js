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
import { RowAccessPolicyReference } from "./rowaccesspolicyreference";
// RowAccessPolicy
/**
 * Represents access on a subset of rows on the specified table, defined by its filter predicate. Access to the subset of rows is controlled by its IAM policy.
**/
var RowAccessPolicy = /** @class */ (function (_super) {
    __extends(RowAccessPolicy, _super);
    function RowAccessPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], RowAccessPolicy.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], RowAccessPolicy.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterPredicate" }),
        __metadata("design:type", String)
    ], RowAccessPolicy.prototype, "filterPredicate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedTime" }),
        __metadata("design:type", String)
    ], RowAccessPolicy.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowAccessPolicyReference" }),
        __metadata("design:type", RowAccessPolicyReference)
    ], RowAccessPolicy.prototype, "rowAccessPolicyReference", void 0);
    return RowAccessPolicy;
}(SpeakeasyBase));
export { RowAccessPolicy };
