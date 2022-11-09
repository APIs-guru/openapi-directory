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
import * as shared from "../shared";
var Domains = /** @class */ (function (_super) {
    __extends(Domains, _super);
    function Domains() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=A" }),
        __metadata("design:type", Array)
    ], Domains.prototype, "a", void 0);
    __decorate([
        Metadata({ data: "json, name=CNAME" }),
        __metadata("design:type", Array)
    ], Domains.prototype, "cname", void 0);
    __decorate([
        Metadata({ data: "json, name=MX", elemType: shared.MxRecords }),
        __metadata("design:type", Array)
    ], Domains.prototype, "mx", void 0);
    __decorate([
        Metadata({ data: "json, name=NS" }),
        __metadata("design:type", Array)
    ], Domains.prototype, "ns", void 0);
    __decorate([
        Metadata({ data: "json, name=TXT" }),
        __metadata("design:type", Array)
    ], Domains.prototype, "txt", void 0);
    __decorate([
        Metadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], Domains.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "json, name=create_date" }),
        __metadata("design:type", Date)
    ], Domains.prototype, "createDate", void 0);
    __decorate([
        Metadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], Domains.prototype, "domain", void 0);
    __decorate([
        Metadata({ data: "json, name=isDead" }),
        __metadata("design:type", String)
    ], Domains.prototype, "isDead", void 0);
    __decorate([
        Metadata({ data: "json, name=update_date" }),
        __metadata("design:type", Date)
    ], Domains.prototype, "updateDate", void 0);
    return Domains;
}(SpeakeasyBase));
export { Domains };
