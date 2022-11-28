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
var TableDataInsertAllRequestRows = /** @class */ (function (_super) {
    __extends(TableDataInsertAllRequestRows, _super);
    function TableDataInsertAllRequestRows() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertId" }),
        __metadata("design:type", String)
    ], TableDataInsertAllRequestRows.prototype, "insertId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=json" }),
        __metadata("design:type", Map)
    ], TableDataInsertAllRequestRows.prototype, "json", void 0);
    return TableDataInsertAllRequestRows;
}(SpeakeasyBase));
export { TableDataInsertAllRequestRows };
var TableDataInsertAllRequest = /** @class */ (function (_super) {
    __extends(TableDataInsertAllRequest, _super);
    function TableDataInsertAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreUnknownValues" }),
        __metadata("design:type", Boolean)
    ], TableDataInsertAllRequest.prototype, "ignoreUnknownValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], TableDataInsertAllRequest.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rows", elemType: TableDataInsertAllRequestRows }),
        __metadata("design:type", Array)
    ], TableDataInsertAllRequest.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skipInvalidRows" }),
        __metadata("design:type", Boolean)
    ], TableDataInsertAllRequest.prototype, "skipInvalidRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateSuffix" }),
        __metadata("design:type", String)
    ], TableDataInsertAllRequest.prototype, "templateSuffix", void 0);
    return TableDataInsertAllRequest;
}(SpeakeasyBase));
export { TableDataInsertAllRequest };
