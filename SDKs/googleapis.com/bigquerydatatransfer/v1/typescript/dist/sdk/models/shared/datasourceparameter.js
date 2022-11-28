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
export var DataSourceParameterTypeEnum;
(function (DataSourceParameterTypeEnum) {
    DataSourceParameterTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    DataSourceParameterTypeEnum["String"] = "STRING";
    DataSourceParameterTypeEnum["Integer"] = "INTEGER";
    DataSourceParameterTypeEnum["Double"] = "DOUBLE";
    DataSourceParameterTypeEnum["Boolean"] = "BOOLEAN";
    DataSourceParameterTypeEnum["Record"] = "RECORD";
    DataSourceParameterTypeEnum["PlusPage"] = "PLUS_PAGE";
})(DataSourceParameterTypeEnum || (DataSourceParameterTypeEnum = {}));
// DataSourceParameter
/**
 * A parameter used to define custom fields in a data source definition.
**/
var DataSourceParameter = /** @class */ (function (_super) {
    __extends(DataSourceParameter, _super);
    function DataSourceParameter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedValues" }),
        __metadata("design:type", Array)
    ], DataSourceParameter.prototype, "allowedValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", Boolean)
    ], DataSourceParameter.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DataSourceParameter.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], DataSourceParameter.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: DataSourceParameter }),
        __metadata("design:type", Array)
    ], DataSourceParameter.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=immutable" }),
        __metadata("design:type", Boolean)
    ], DataSourceParameter.prototype, "immutable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxValue" }),
        __metadata("design:type", Number)
    ], DataSourceParameter.prototype, "maxValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minValue" }),
        __metadata("design:type", Number)
    ], DataSourceParameter.prototype, "minValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paramId" }),
        __metadata("design:type", String)
    ], DataSourceParameter.prototype, "paramId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recurse" }),
        __metadata("design:type", Boolean)
    ], DataSourceParameter.prototype, "recurse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repeated" }),
        __metadata("design:type", Boolean)
    ], DataSourceParameter.prototype, "repeated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], DataSourceParameter.prototype, "required", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DataSourceParameter.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validationDescription" }),
        __metadata("design:type", String)
    ], DataSourceParameter.prototype, "validationDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validationHelpUrl" }),
        __metadata("design:type", String)
    ], DataSourceParameter.prototype, "validationHelpUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validationRegex" }),
        __metadata("design:type", String)
    ], DataSourceParameter.prototype, "validationRegex", void 0);
    return DataSourceParameter;
}(SpeakeasyBase));
export { DataSourceParameter };
