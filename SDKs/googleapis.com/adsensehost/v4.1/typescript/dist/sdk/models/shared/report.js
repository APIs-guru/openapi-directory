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
var ReportHeaders = /** @class */ (function (_super) {
    __extends(ReportHeaders, _super);
    function ReportHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], ReportHeaders.prototype, "currency", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReportHeaders.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ReportHeaders.prototype, "type", void 0);
    return ReportHeaders;
}(SpeakeasyBase));
export { ReportHeaders };
var Report = /** @class */ (function (_super) {
    __extends(Report, _super);
    function Report() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=averages" }),
        __metadata("design:type", Array)
    ], Report.prototype, "averages", void 0);
    __decorate([
        Metadata({ data: "json, name=headers", elemType: shared.ReportHeaders }),
        __metadata("design:type", Array)
    ], Report.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Report.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=rows" }),
        __metadata("design:type", Array)
    ], Report.prototype, "rows", void 0);
    __decorate([
        Metadata({ data: "json, name=totalMatchedRows" }),
        __metadata("design:type", String)
    ], Report.prototype, "totalMatchedRows", void 0);
    __decorate([
        Metadata({ data: "json, name=totals" }),
        __metadata("design:type", Array)
    ], Report.prototype, "totals", void 0);
    __decorate([
        Metadata({ data: "json, name=warnings" }),
        __metadata("design:type", Array)
    ], Report.prototype, "warnings", void 0);
    return Report;
}(SpeakeasyBase));
export { Report };
