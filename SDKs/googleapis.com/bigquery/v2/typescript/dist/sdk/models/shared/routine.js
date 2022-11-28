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
import { Argument } from "./argument";
import { RemoteFunctionOptions } from "./remotefunctionoptions";
import { StandardSqlTableType } from "./standardsqltabletype";
import { StandardSqlDataType } from "./standardsqldatatype";
import { RoutineReference } from "./routinereference";
import { SparkOptions } from "./sparkoptions";
export var RoutineDeterminismLevelEnum;
(function (RoutineDeterminismLevelEnum) {
    RoutineDeterminismLevelEnum["DeterminismLevelUnspecified"] = "DETERMINISM_LEVEL_UNSPECIFIED";
    RoutineDeterminismLevelEnum["Deterministic"] = "DETERMINISTIC";
    RoutineDeterminismLevelEnum["NotDeterministic"] = "NOT_DETERMINISTIC";
})(RoutineDeterminismLevelEnum || (RoutineDeterminismLevelEnum = {}));
export var RoutineLanguageEnum;
(function (RoutineLanguageEnum) {
    RoutineLanguageEnum["LanguageUnspecified"] = "LANGUAGE_UNSPECIFIED";
    RoutineLanguageEnum["Sql"] = "SQL";
    RoutineLanguageEnum["Javascript"] = "JAVASCRIPT";
    RoutineLanguageEnum["Python"] = "PYTHON";
})(RoutineLanguageEnum || (RoutineLanguageEnum = {}));
export var RoutineRoutineTypeEnum;
(function (RoutineRoutineTypeEnum) {
    RoutineRoutineTypeEnum["RoutineTypeUnspecified"] = "ROUTINE_TYPE_UNSPECIFIED";
    RoutineRoutineTypeEnum["ScalarFunction"] = "SCALAR_FUNCTION";
    RoutineRoutineTypeEnum["Procedure"] = "PROCEDURE";
    RoutineRoutineTypeEnum["TableValuedFunction"] = "TABLE_VALUED_FUNCTION";
})(RoutineRoutineTypeEnum || (RoutineRoutineTypeEnum = {}));
// Routine
/**
 * A user-defined function or a stored procedure.
**/
var Routine = /** @class */ (function (_super) {
    __extends(Routine, _super);
    function Routine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arguments", elemType: Argument }),
        __metadata("design:type", Array)
    ], Routine.prototype, "arguments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], Routine.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=definitionBody" }),
        __metadata("design:type", String)
    ], Routine.prototype, "definitionBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Routine.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=determinismLevel" }),
        __metadata("design:type", String)
    ], Routine.prototype, "determinismLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Routine.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importedLibraries" }),
        __metadata("design:type", Array)
    ], Routine.prototype, "importedLibraries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], Routine.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedTime" }),
        __metadata("design:type", String)
    ], Routine.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteFunctionOptions" }),
        __metadata("design:type", RemoteFunctionOptions)
    ], Routine.prototype, "remoteFunctionOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnTableType" }),
        __metadata("design:type", StandardSqlTableType)
    ], Routine.prototype, "returnTableType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnType" }),
        __metadata("design:type", StandardSqlDataType)
    ], Routine.prototype, "returnType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routineReference" }),
        __metadata("design:type", RoutineReference)
    ], Routine.prototype, "routineReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routineType" }),
        __metadata("design:type", String)
    ], Routine.prototype, "routineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkOptions" }),
        __metadata("design:type", SparkOptions)
    ], Routine.prototype, "sparkOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strictMode" }),
        __metadata("design:type", Boolean)
    ], Routine.prototype, "strictMode", void 0);
    return Routine;
}(SpeakeasyBase));
export { Routine };
// RoutineInput
/**
 * A user-defined function or a stored procedure.
**/
var RoutineInput = /** @class */ (function (_super) {
    __extends(RoutineInput, _super);
    function RoutineInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arguments", elemType: Argument }),
        __metadata("design:type", Array)
    ], RoutineInput.prototype, "arguments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=definitionBody" }),
        __metadata("design:type", String)
    ], RoutineInput.prototype, "definitionBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], RoutineInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=determinismLevel" }),
        __metadata("design:type", String)
    ], RoutineInput.prototype, "determinismLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importedLibraries" }),
        __metadata("design:type", Array)
    ], RoutineInput.prototype, "importedLibraries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], RoutineInput.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteFunctionOptions" }),
        __metadata("design:type", RemoteFunctionOptions)
    ], RoutineInput.prototype, "remoteFunctionOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnTableType" }),
        __metadata("design:type", StandardSqlTableType)
    ], RoutineInput.prototype, "returnTableType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnType" }),
        __metadata("design:type", StandardSqlDataType)
    ], RoutineInput.prototype, "returnType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routineReference" }),
        __metadata("design:type", RoutineReference)
    ], RoutineInput.prototype, "routineReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routineType" }),
        __metadata("design:type", String)
    ], RoutineInput.prototype, "routineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkOptions" }),
        __metadata("design:type", SparkOptions)
    ], RoutineInput.prototype, "sparkOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strictMode" }),
        __metadata("design:type", Boolean)
    ], RoutineInput.prototype, "strictMode", void 0);
    return RoutineInput;
}(SpeakeasyBase));
export { RoutineInput };
