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
import { NamespaceProperties } from "./namespaceproperties";
import { NamespaceTypeEnum } from "./namespacetypeenum";
// NamespaceSummary
/**
 * A complex type that contains information about a namespace.
**/
var NamespaceSummary = /** @class */ (function (_super) {
    __extends(NamespaceSummary, _super);
    function NamespaceSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], NamespaceSummary.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=CreateDate" }),
        __metadata("design:type", Date)
    ], NamespaceSummary.prototype, "createDate", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], NamespaceSummary.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], NamespaceSummary.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], NamespaceSummary.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=Properties" }),
        __metadata("design:type", NamespaceProperties)
    ], NamespaceSummary.prototype, "properties", void 0);
    __decorate([
        Metadata({ data: "json, name=ServiceCount" }),
        __metadata("design:type", Number)
    ], NamespaceSummary.prototype, "serviceCount", void 0);
    __decorate([
        Metadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], NamespaceSummary.prototype, "type", void 0);
    return NamespaceSummary;
}(SpeakeasyBase));
export { NamespaceSummary };
