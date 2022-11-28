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
import { ConnectionProperty } from "./connectionproperty";
import { DatasetReference } from "./datasetreference";
import { QueryParameter } from "./queryparameter";
var QueryRequest = /** @class */ (function (_super) {
    __extends(QueryRequest, _super);
    function QueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectionProperties", elemType: ConnectionProperty }),
        __metadata("design:type", Array)
    ], QueryRequest.prototype, "connectionProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createSession" }),
        __metadata("design:type", Boolean)
    ], QueryRequest.prototype, "createSession", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultDataset" }),
        __metadata("design:type", DatasetReference)
    ], QueryRequest.prototype, "defaultDataset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dryRun" }),
        __metadata("design:type", Boolean)
    ], QueryRequest.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], QueryRequest.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], QueryRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], QueryRequest.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], QueryRequest.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumBytesBilled" }),
        __metadata("design:type", String)
    ], QueryRequest.prototype, "maximumBytesBilled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameterMode" }),
        __metadata("design:type", String)
    ], QueryRequest.prototype, "parameterMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preserveNulls" }),
        __metadata("design:type", Boolean)
    ], QueryRequest.prototype, "preserveNulls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", String)
    ], QueryRequest.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryParameters", elemType: QueryParameter }),
        __metadata("design:type", Array)
    ], QueryRequest.prototype, "queryParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], QueryRequest.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutMs" }),
        __metadata("design:type", Number)
    ], QueryRequest.prototype, "timeoutMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useLegacySql" }),
        __metadata("design:type", Boolean)
    ], QueryRequest.prototype, "useLegacySql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useQueryCache" }),
        __metadata("design:type", Boolean)
    ], QueryRequest.prototype, "useQueryCache", void 0);
    return QueryRequest;
}(SpeakeasyBase));
export { QueryRequest };
