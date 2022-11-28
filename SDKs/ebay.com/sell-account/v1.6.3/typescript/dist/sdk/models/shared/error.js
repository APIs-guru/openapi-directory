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
import { ErrorParameter } from "./errorparameter";
// Error
/**
 * A container that defines the elements of error and warning messages.
**/
var Error = /** @class */ (function (_super) {
    __extends(Error, _super);
    function Error() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], Error.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], Error.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorId" }),
        __metadata("design:type", Number)
    ], Error.prototype, "errorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputRefIds" }),
        __metadata("design:type", Array)
    ], Error.prototype, "inputRefIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longMessage" }),
        __metadata("design:type", String)
    ], Error.prototype, "longMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Error.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputRefIds" }),
        __metadata("design:type", Array)
    ], Error.prototype, "outputRefIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: ErrorParameter }),
        __metadata("design:type", Array)
    ], Error.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subdomain" }),
        __metadata("design:type", String)
    ], Error.prototype, "subdomain", void 0);
    return Error;
}(SpeakeasyBase));
export { Error };
