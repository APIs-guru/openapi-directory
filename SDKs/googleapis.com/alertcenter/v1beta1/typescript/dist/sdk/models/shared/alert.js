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
import { AlertMetadata } from "./alertmetadata";
// Alert
/**
 * An alert affecting a customer.
**/
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=alertId" }),
        __metadata("design:type", String)
    ], Alert.prototype, "alertId", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Alert.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=customerId" }),
        __metadata("design:type", String)
    ], Alert.prototype, "customerId", void 0);
    __decorate([
        Metadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], Alert.prototype, "data", void 0);
    __decorate([
        Metadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], Alert.prototype, "deleted", void 0);
    __decorate([
        Metadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], Alert.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Alert.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "json, name=metadata" }),
        __metadata("design:type", AlertMetadata)
    ], Alert.prototype, "metadata", void 0);
    __decorate([
        Metadata({ data: "json, name=securityInvestigationToolLink" }),
        __metadata("design:type", String)
    ], Alert.prototype, "securityInvestigationToolLink", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], Alert.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], Alert.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Alert.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Alert.prototype, "updateTime", void 0);
    return Alert;
}(SpeakeasyBase));
export { Alert };
