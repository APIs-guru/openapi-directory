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
export var CreditRoleEnum;
(function (CreditRoleEnum) {
    CreditRoleEnum["Actor"] = "actor";
    CreditRoleEnum["Associateproducer"] = "associateproducer";
    CreditRoleEnum["Coactor"] = "coactor";
    CreditRoleEnum["Director"] = "director";
    CreditRoleEnum["Executiveproducer"] = "executiveproducer";
    CreditRoleEnum["Filminglocation"] = "filminglocation";
    CreditRoleEnum["Guest"] = "guest";
    CreditRoleEnum["Narrator"] = "narrator";
    CreditRoleEnum["Other"] = "other";
    CreditRoleEnum["Presenter"] = "presenter";
    CreditRoleEnum["Producer"] = "producer";
    CreditRoleEnum["Productmanager"] = "productmanager";
    CreditRoleEnum["Thememusicby"] = "thememusicby";
    CreditRoleEnum["Voice"] = "voice";
    CreditRoleEnum["Writer"] = "writer";
})(CreditRoleEnum || (CreditRoleEnum = {}));
var Credit = /** @class */ (function (_super) {
    __extends(Credit, _super);
    function Credit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=character" }),
        __metadata("design:type", String)
    ], Credit.prototype, "character", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Credit.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], Credit.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], Credit.prototype, "role", void 0);
    return Credit;
}(SpeakeasyBase));
export { Credit };
