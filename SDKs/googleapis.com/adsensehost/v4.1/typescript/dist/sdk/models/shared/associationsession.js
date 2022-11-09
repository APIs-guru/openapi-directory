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
var AssociationSession = /** @class */ (function (_super) {
    __extends(AssociationSession, _super);
    function AssociationSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], AssociationSession.prototype, "accountId", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssociationSession.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], AssociationSession.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=productCodes" }),
        __metadata("design:type", Array)
    ], AssociationSession.prototype, "productCodes", void 0);
    __decorate([
        Metadata({ data: "json, name=redirectUrl" }),
        __metadata("design:type", String)
    ], AssociationSession.prototype, "redirectUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AssociationSession.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=userLocale" }),
        __metadata("design:type", String)
    ], AssociationSession.prototype, "userLocale", void 0);
    __decorate([
        Metadata({ data: "json, name=websiteLocale" }),
        __metadata("design:type", String)
    ], AssociationSession.prototype, "websiteLocale", void 0);
    __decorate([
        Metadata({ data: "json, name=websiteUrl" }),
        __metadata("design:type", String)
    ], AssociationSession.prototype, "websiteUrl", void 0);
    return AssociationSession;
}(SpeakeasyBase));
export { AssociationSession };
