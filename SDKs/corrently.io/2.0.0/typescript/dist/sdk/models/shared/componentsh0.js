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
var Componentsh0 = /** @class */ (function (_super) {
    __extends(Componentsh0, _super);
    function Componentsh0() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=components", elemType: Componentsh0 }),
        __metadata("design:type", Array)
    ], Componentsh0.prototype, "components", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=describtion" }),
        __metadata("design:type", String)
    ], Componentsh0.prototype, "describtion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mutlityplier" }),
        __metadata("design:type", String)
    ], Componentsh0.prototype, "mutlityplier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per" }),
        __metadata("design:type", Number)
    ], Componentsh0.prototype, "per", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sum" }),
        __metadata("design:type", Number)
    ], Componentsh0.prototype, "sum", void 0);
    return Componentsh0;
}(SpeakeasyBase));
export { Componentsh0 };
