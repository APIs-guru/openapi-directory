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
import { ResourceLocation } from "./resourcelocation";
import { OperationTypeEnum } from "./operationtypeenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { OperationStatusEnum } from "./operationstatusenum";
// Operation
/**
 * Describes the API operation.
**/
var Operation = /** @class */ (function (_super) {
    __extends(Operation, _super);
    function Operation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Operation.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCode" }),
        __metadata("design:type", String)
    ], Operation.prototype, "errorCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorDetails" }),
        __metadata("design:type", String)
    ], Operation.prototype, "errorDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Operation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isTerminal" }),
        __metadata("design:type", Boolean)
    ], Operation.prototype, "isTerminal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", ResourceLocation)
    ], Operation.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationDetails" }),
        __metadata("design:type", String)
    ], Operation.prototype, "operationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationType" }),
        __metadata("design:type", String)
    ], Operation.prototype, "operationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], Operation.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], Operation.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Operation.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusChangedAt" }),
        __metadata("design:type", Date)
    ], Operation.prototype, "statusChangedAt", void 0);
    return Operation;
}(SpeakeasyBase));
export { Operation };
