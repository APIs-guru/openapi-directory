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
import { DmlStatistics } from "./dmlstatistics";
import { ErrorProto } from "./errorproto";
import { JobReference } from "./jobreference";
import { TableRow } from "./tablerow";
import { TableSchema } from "./tableschema";
import { SessionInfo } from "./sessioninfo";
var QueryResponse = /** @class */ (function (_super) {
    __extends(QueryResponse, _super);
    function QueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cacheHit" }),
        __metadata("design:type", Boolean)
    ], QueryResponse.prototype, "cacheHit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dmlStats" }),
        __metadata("design:type", DmlStatistics)
    ], QueryResponse.prototype, "dmlStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorProto }),
        __metadata("design:type", Array)
    ], QueryResponse.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobComplete" }),
        __metadata("design:type", Boolean)
    ], QueryResponse.prototype, "jobComplete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobReference" }),
        __metadata("design:type", JobReference)
    ], QueryResponse.prototype, "jobReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], QueryResponse.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numDmlAffectedRows" }),
        __metadata("design:type", String)
    ], QueryResponse.prototype, "numDmlAffectedRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageToken" }),
        __metadata("design:type", String)
    ], QueryResponse.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rows", elemType: TableRow }),
        __metadata("design:type", Array)
    ], QueryResponse.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", TableSchema)
    ], QueryResponse.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sessionInfo" }),
        __metadata("design:type", SessionInfo)
    ], QueryResponse.prototype, "sessionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalBytesProcessed" }),
        __metadata("design:type", String)
    ], QueryResponse.prototype, "totalBytesProcessed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalRows" }),
        __metadata("design:type", String)
    ], QueryResponse.prototype, "totalRows", void 0);
    return QueryResponse;
}(SpeakeasyBase));
export { QueryResponse };
