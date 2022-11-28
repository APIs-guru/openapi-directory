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
import { StandardSqlStructType } from "./standardsqlstructtype";
export var StandardSqlDataTypeTypeKindEnum;
(function (StandardSqlDataTypeTypeKindEnum) {
    StandardSqlDataTypeTypeKindEnum["TypeKindUnspecified"] = "TYPE_KIND_UNSPECIFIED";
    StandardSqlDataTypeTypeKindEnum["Int64"] = "INT64";
    StandardSqlDataTypeTypeKindEnum["Bool"] = "BOOL";
    StandardSqlDataTypeTypeKindEnum["Float64"] = "FLOAT64";
    StandardSqlDataTypeTypeKindEnum["String"] = "STRING";
    StandardSqlDataTypeTypeKindEnum["Bytes"] = "BYTES";
    StandardSqlDataTypeTypeKindEnum["Timestamp"] = "TIMESTAMP";
    StandardSqlDataTypeTypeKindEnum["Date"] = "DATE";
    StandardSqlDataTypeTypeKindEnum["Time"] = "TIME";
    StandardSqlDataTypeTypeKindEnum["Datetime"] = "DATETIME";
    StandardSqlDataTypeTypeKindEnum["Interval"] = "INTERVAL";
    StandardSqlDataTypeTypeKindEnum["Geography"] = "GEOGRAPHY";
    StandardSqlDataTypeTypeKindEnum["Numeric"] = "NUMERIC";
    StandardSqlDataTypeTypeKindEnum["Bignumeric"] = "BIGNUMERIC";
    StandardSqlDataTypeTypeKindEnum["Json"] = "JSON";
    StandardSqlDataTypeTypeKindEnum["Array"] = "ARRAY";
    StandardSqlDataTypeTypeKindEnum["Struct"] = "STRUCT";
})(StandardSqlDataTypeTypeKindEnum || (StandardSqlDataTypeTypeKindEnum = {}));
// StandardSqlDataType
/**
 * The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } }
**/
var StandardSqlDataType = /** @class */ (function (_super) {
    __extends(StandardSqlDataType, _super);
    function StandardSqlDataType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arrayElementType" }),
        __metadata("design:type", StandardSqlDataType)
    ], StandardSqlDataType.prototype, "arrayElementType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=structType" }),
        __metadata("design:type", StandardSqlStructType)
    ], StandardSqlDataType.prototype, "structType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=typeKind" }),
        __metadata("design:type", String)
    ], StandardSqlDataType.prototype, "typeKind", void 0);
    return StandardSqlDataType;
}(SpeakeasyBase));
export { StandardSqlDataType };
